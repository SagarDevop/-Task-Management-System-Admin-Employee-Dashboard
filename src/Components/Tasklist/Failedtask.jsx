import React from 'react'

function Failedtask({data}) {
  return (
    <>
    <div className='bg-danger-subtle rounded-3 flex-shrink-0'style={{width:"25%",height:"40vh"}}>
            <div className='p-3 mb-3 d-flex align-items-center'style={{width:"100%",height:"12vh"}}>
                <h5 className='bg-danger rounded-3  p-2 me-4' >{data.category}</h5>
                <p className='ms-5'>{data.date}</p>
            </div>
            <h4 className='ms-3'>{data.title}</h4>
            <p className='ms-3 pt-3'>{data.description}</p>
             <div className='d-flex mt-1' style={{justifyContent:"center"}}>
              <div className='bg-danger rounded-1 p-2 text-center' style={{width:"90%",height:"5vh"}}>Task Failed</div>
             
             </div>
    </div>
    </>
  )
}

export default Failedtask
