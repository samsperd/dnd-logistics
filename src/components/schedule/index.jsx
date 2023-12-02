import React, { memo } from 'react'

const Schedule = memo(({
    accept,
    lastDroppedItem,
    onDrop,
  }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
      accept,
      drop: onDrop,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    })
    const isActive = isOver && canDrop
    let backgroundColor = '#222'
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }



    
    var formattedDateArray = [];

// Get the current date
var currentDate = new Date();

// Loop 10 times to generate the next 10 dates
for (var i = 0; i < 12; i++) {
  // Clone the current date to avoid modifying it directly
  var nextDate = new Date(currentDate);

  // Increment the date by one day for each iteration
  nextDate.setDate(currentDate.getDate() + i);

  // Format the date to DD/MM/YYYY and add it to the array
  var formattedDate = nextDate.toLocaleDateString('en-GB'); // 'en-GB' for DD/MM/YYYY format
  formattedDateArray.push(formattedDate);
}

// Log the array of formatted dates
console.log(formattedDateArray);




  return (
    <div className='border flex-1 h-full bg-neutral-100/95'>
    <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Date<br />
                          <small className='text-slate-400'>DD/MM/YYYY</small>
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Slot 1
                          <br />
                          <small className='text-slate-400'>6am - 8am</small>
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Slot 2<br />
                          <small className='text-slate-400'>8am - 10am</small>
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Slot 3<br />
                          <small className='text-slate-400'>10am - 12pm</small>
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Slot 4<br />
                          <small className='text-slate-400'>12pm - 2pm</small>
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Slot 5<br />
                          <small className='text-slate-400'>2pm - 4pm</small>
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Slot 6<br />
                          <small className='text-slate-400'>4pm - 6pm</small>
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Slot 7<br />
                          <small className='text-slate-400'>6pm - 8pm</small>
                        </th>
          </tr>
        </thead>

        <tbody>
            {/* {
                formattedDateArray.map((date, i) => (
                    <tr>
                        <th class="px-6 align-middle border text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        { date }
                        </th>
                        <td class="px-6 align-middle border text-xs whitespace-nowrap p-4 ">
                        </td>
                        <td class="px-6 align-center border text-xs whitespace-nowrap p-4">
                        </td>
                        <td class="px-6 align-middle border text-xs whitespace-nowrap p-4 ">
                        </td>
                        <td class="px-6 align-center border text-xs whitespace-nowrap p-4">
                        </td>
                        <td class="px-6 align-middle border text-xs whitespace-nowrap p-4 ">
                        </td>
                        <td class="px-6 align-center border text-xs whitespace-nowrap p-4">
                        </td>
                        <td class="px-6 align-middle border text-xs whitespace-nowrap p-4 ">
                        </td>

                    </tr>

                ))
            } */}



        </tbody>

      </table>




      
    </div>

  </div>
  )
})

export default Schedule