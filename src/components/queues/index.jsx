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

const Queues = memo(() => {

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
    <div id="queues">
    <ul role="list" class="p-6 divide-y divide-slate-200">


      <li class="flex py-4 first:pt-0 last:pb-0">
        {/* <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
        <div class="ml-3 overflow-hidden">
          <p class="text-sm font-medium text-slate-900 mb-1">person.name</p>
          <p class="text-xs text-slate-500 truncate"> <span className='text-slate-300'>#ID</span> KJFELRER3LKJ3</p>
          <div className="mt-3 flex flex-col gap-1">
            <p class="text-sm text-slate-500 truncate"> <span className='text-slate-400 text-xs'>Pick-Up:</span> person.email</p>
            <p class="text-sm text-slate-500 truncate"> <span className='text-slate-400 text-xs'>Drop off:</span> person.email</p>

          </div>

        </div>
      </li>
      <li class="flex py-4 first:pt-0 last:pb-0">
        {/* <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
        <div class="ml-3 overflow-hidden">
          <p class="text-sm font-medium text-slate-900 mb-1">person.name</p>
          <p class="text-xs text-slate-500 truncate"> <span className='text-slate-300'>#ID</span> KJFELRER3LKJ3</p>
          <div className="mt-3 flex flex-col gap-1">
            <p class="text-sm text-slate-500 truncate"> <span className='text-slate-400 text-xs'>Pick-Up:</span> person.email</p>
            <p class="text-sm text-slate-500 truncate"> <span className='text-slate-400 text-xs'>Drop off:</span> person.email</p>

          </div>

        </div>
      </li>
      <li class="flex py-4 first:pt-0 last:pb-0">
        {/* <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
        <div class="ml-3 overflow-hidden">
          <p class="text-sm font-medium text-slate-900 mb-1">person.name</p>
          <p class="text-xs text-slate-500 truncate"> <span className='text-slate-300'>#ID</span> KJFELRER3LKJ3</p>
          <div className="mt-3 flex flex-col gap-1">
            <p class="text-sm text-slate-500 truncate"> <span className='text-slate-400 text-xs'>Pick-Up:</span> person.email</p>
            <p class="text-sm text-slate-500 truncate"> <span className='text-slate-400 text-xs'>Drop off:</span> person.email</p>

          </div>

        </div>
      </li>

    </ul>



    </div>
  )
})

export default Queues