import React from 'react'
function Tasknumberlist({data}) {
  return (
    <div className='d-flex justify-content-between mt-5 gap-3'style={{}}>
      <div className='bg-warning p-1 ps-3 rounded-3' style={{width:"45%",height:"20vh"}}>
        <h1 className='fs-1 fw-bold pb-4  '>{data.taskCount.new_task}</h1>
        <h1 className='fs-3 '>New Task</h1>
      </div>
      <div className='bg-info p-1 ps-3 rounded-3' style={{width:"45%",height:"20vh"}}>
        <h1 className='fs-1 fw-bold pb-4  '>{data.taskCount.active}</h1>
        <h1 className='fs-3 '>Accepted Task</h1>
      </div>
      <div className='bg-danger p-1 ps-3 rounded-3' style={{width:"45%",height:"20vh"}}>
        <h1 className='fs-1 fw-bold pb-4 '>{data.taskCount.failed}</h1>
        <h1 className='fs-3 '>Failed Task</h1>
      </div>
     <div className='bg-success p-1 ps-3 rounded-3' style={{width:"45%",height:"20vh"}}>
        <h1 className='fs-1 fw-bold pb-4  '>{data.taskCount.completed}</h1>
        <h1 className='fs-3'>Completed Task</h1>
      </div>
    </div>
  )
}

export default Tasknumberlist
