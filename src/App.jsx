import update from 'immutability-helper'
import { memo, useCallback, useState } from 'react'
import { MdMoreVert } from "react-icons/md";
import Queues from './components/queues';
import Schedule from './components/schedule';
import { useDrag, DndProvider } from 'react-dnd';
import { NativeTypes, HTML5Backend } from "react-dnd-html5-backend";
import { Queue } from './components/queue';
import { Scheduler } from './Scheduler';
const ItemTypes = {
  FOOD: 'food',
  GLASS: 'glass',
  PAPER: 'paper',
}


const App = memo(() => {

  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
    { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
    {
      accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
      lastDroppedItem: null,
    },
    { accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null },
  ])
  const [boxes] = useState([
    { name: 'Bottle', type: ItemTypes.GLASS },
    { name: 'Banana', type: ItemTypes.FOOD },
    { name: 'Magazine', type: ItemTypes.PAPER },
  ])
  const [droppedBoxNames, setDroppedBoxNames] = useState([])
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      )
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      )
    },
    [droppedBoxNames, dustbins],
  )

  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='h-screen w-full'>

        
        <div id="layout" className='flex md:flex-row flex-col h-full'>
          <div className='md:w-72 h-full shadow-xl'>
            <div id='head' className="border h-14 flex items-center gap-3">
              <img className="h-10 w-10 rounded-lg ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <div className="flex-1 flex items-center justify-between">
                <h4>Queues</h4>
                <MdMoreVert className='mr-5' />
              </div>
            </div>
            <div id="queues">
    <ul role="list" className="p-6 divide-y divide-slate-200">
    {boxes.map(({ name, type }, index) => (

      <Queue name={name}
      type={type}
      isDropped={isDropped(name)}
      key={index}></Queue>

    ))}

    </ul>



    </div>
          </div>

          {dustbins.map(({ accepts, lastDroppedItem }, index) => (
            <Scheduler accept={accepts}
              lastDroppedItem={lastDroppedItem}
              onDrop={(item) => handleDrop(index, item)}
              key={index}></Scheduler>

        ))}


        </div>

      </div>


    </DndProvider>
  )
})

export default App