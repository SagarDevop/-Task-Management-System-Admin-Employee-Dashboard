import React, { useContext } from 'react'
import { AuthContext } from '../../Context/Authprovider'

function Alltask({data}) {
    const authData = useContext(AuthContext)
    
    if (!authData || !authData.employees) {
        return <div>Loading...</div>
    }
    
    return (
        <>
            <div id='tasklist' className='bg-success-subtle rounded-1 p-3 mt-2'>
                <div className='bg-success px-3 mb-2 rounded-3 d-flex align-items-center' style={{justifyContent:"space-between"}}> 
                    <h3 className='text-dark'>Employees Name</h3>
                    <h3 className='text-dark'>New-Task</h3>
                    <h3 className='text-dark'>Active Task</h3>
                    <h3 className='text-dark'>Completed Task</h3>
                    <h3 className='text-dark'>Failed Task</h3>
                </div>

                {authData.employees.map((e, index) => {
                    return (
                        <div key={index} className='bg-success px-3 mb-2 rounded-3 d-flex align-items-center' style={{justifyContent:"space-between"}}> 
                            <h3>{e.firstName}</h3>
                            <h3>{e.taskCount?.new_task || 0}</h3>
                            <h3>{e.taskCount?.active || 0}</h3>
                            <h3>{e.taskCount?.completed || 0}</h3>
                            <h3>{e.taskCount?.failed || 0}</h3>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Alltask
