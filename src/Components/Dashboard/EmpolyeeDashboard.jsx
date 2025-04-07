import React, { useEffect, useState } from 'react'
import Header from '../Other/Header'
import Tasknumberlist from '../Other/Tasknumberlist'
import Tasklist from '../Tasklist/Tasklist'

function EmpolyeeDashboard(props) {
  const [localData, setLocalData] = useState(props.data);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedData = JSON.parse(localStorage.getItem("employees"));
      if (storedData) {
        const currentUser = storedData.find(user => user.firstName === props.data.firstName);
        if (currentUser) {
          setLocalData(currentUser);
        }
      }
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);
    
    // Initial check
    handleStorageChange();

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [props.data.firstName]);

  return (
    <>
      <div className='p-5 bg-dark ' style={{height:"100vh"}}> 
        <Header changeUser={props.changeUser} data={localData} />
        <Tasknumberlist data={localData}/>
        <Tasklist data={localData}/>
      </div>
    </>
  )
}

export default EmpolyeeDashboard
