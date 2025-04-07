import React from 'react'
import Accepttask from '../Tasklist/Accepttask'
import Completetask from '../Tasklist/Completetask'
import Failedtask from '../Tasklist/Failedtask'
import Newtask from '../Tasklist/Newtask'
function Tasklist({data}) {
  return (
    <>
    <div id='tasklist' className='border-bottom border-3 mt-3 d-flex gap-3 align-items-center justify-content-start flex-nowrap overflow-x-auto 'style={{width:"100%",height:"47vh"}}>
        {data.tasks.map((e, inx)=>{
            if(e.active){
                return <Accepttask data={e} key={inx}/>
            }
            if(e.completed){
                return <Completetask data={e} key={inx}/>
            }
            if(e.failed){
                return <Failedtask data={e} key={inx}/>
            }
            if(e.new_task){
                return <Newtask data={e} key={inx}/>
            }
        })}
        
        
        
        
        
        
        
       
        


    </div>
    </>
  )
}

export default Tasklist
