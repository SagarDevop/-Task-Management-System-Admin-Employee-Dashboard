import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import Alltask from '../Other/Alltask'
function AdminDashboard(props) {
  return (
    <><div className='px-5 pt-2 '>
    <Header changeUser={props.changeUser} data={props.data} />
    <CreateTask/>
    <Alltask/>
                                              
    </div>
  
    </>
  )
}

export default AdminDashboard
