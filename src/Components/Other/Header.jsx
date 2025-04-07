import React from 'react'

function Header(props) {

  const LogoutFunction = () => {
    localStorage.removeItem("loggedInUser")
    props.changeUser("")
  }

  return (
    <>
    <div className='d-flex justify-content-between  align-items-end'>
        <h1 className='fs-2 fw-bold'>Hello <br /> <span className='fw-bold fs-1'>sas&#128075;</span></h1>
        <button className='btn btn-danger fw-bold' onClick={LogoutFunction} >Log out</button>
    </div>
    </>
  )
}

export default Header
