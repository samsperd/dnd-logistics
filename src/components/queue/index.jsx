import React, { memo } from 'react'
import { useDrag } from 'react-dnd'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

export const Queue = memo(({ name, type, isDropped }) => {

    const [{ opacity }, drag] = useDrag(
        () => ({
          type,
          item: { name },
          collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
          }),
        }),
        [name, type],
      )


  return (
    <li className="flex py-4 first:pt-0 last:pb-0" ref={drag} style={{ opacity }}>
    {/* <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
    <div className="overflow-hidden border rounded-xl p-7">
      <p className="text-sm font-medium text-slate-900 mb-1">{isDropped ? <s>{name}</s> : name}</p>
      <p className="text-xs text-slate-500 truncate"> <span className='text-slate-300'>#ID</span> KJFELRER3LKJ3</p>
      <div className="mt-3 flex flex-col gap-1">
        <p className="text-sm text-slate-500 truncate"> <span className='text-slate-400 text-xs'>Pick-Up:</span> person.email</p>
        <p className="text-sm text-slate-500 truncate"> <span className='text-slate-400 text-xs'>Drop off:</span> person.email</p>

      </div>

    </div>
  </li>
  )
})
