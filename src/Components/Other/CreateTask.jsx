import React , {useState} from 'react'

function Createtask() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            category,
            date,
            title,
            description,
            active: false,
            new_task: true,
            failed: false,
            completed: false,
        };

        // Get existing data from localStorage
        const existingData = JSON.parse(localStorage.getItem("employees")) || [];
        
        // Update the data
        const updatedData = existingData.map(elem => {
            if (assignTo === elem.firstName) {
                // Initialize tasks array if it doesn't exist
                if (!elem.tasks) {
                    elem.tasks = [];
                }
                // Initialize taskCount if it doesn't exist
                if (!elem.taskCount) {
                    elem.taskCount = {
                        new_task: 0,
                        active: 0,
                        failed: 0,
                        completed: 0
                    };
                }
                // Add new task
                elem.tasks.push(newTask);
                // Update task count
                elem.taskCount.new_task = (elem.taskCount.new_task || 0) + 1;
            }
            return elem;
        });

        // Save updated data to localStorage
        localStorage.setItem("employees", JSON.stringify(updatedData));
        
        // Dispatch custom event to notify about localStorage update
        window.dispatchEvent(new Event('localStorageUpdated'));
        
        // Reset form fields
        setTitle("");
        setCategory("");
        setAssignTo("");
        setDate("");
        setDescription("");
    };

    const [title , setTitle] = useState("")
    const [date , setDate] = useState("")
    const [assignTo , setAssignTo] = useState("")
    const [category , setCategory] = useState("")
    const [description , setDescription] = useState("")
    const [userData , setUserData] = useState({})
    
    
  return (
    <div className='px-5 pt-1 border border-1 border-dark rounded-3 mt-3 bg-success-subtle '>
    <form onSubmit={(e)=>{
        handleSubmit(e)
        }}>
    
    <div className='d-flex align-items-center'style={{justifyContent:"space-between"}} >
        <div className='m-1'>
            <h5 className='fw-bold fs-5 m-1 text-dark'>Task Title</h5>
            <input 
            value={title}
            onChange={(e)=>{
                setTitle(e.target.value)
            }}

            style={{width:"400px",height:"40px"}} className='border border-1 border-dark rounded-1 bg-dark text-white' type="text" placeholder='Enter Task Title ' />
        </div>
        <div>
            <h5  className='text-dark fw-bold fs-5 m-1'>Date</h5>
            <input 
            value={date}
            onChange={(e)=>{
                setDate(e.target.value)
            }}
            style={{width:"400px",height:"40px"}} className='bg-dark text-white border border-1 border-dark rounded-1' type="date"/>
        </div>
    </div>
    <div className='d-flex align-items-center'style={{justifyContent:"space-between"}} >
        <div className='m-1'>
            <h5 className='fw-bold fs-5 m-1 text-dark'>Assign To</h5>
            <input 
            value={assignTo}
            onChange={(e)=>{
                setAssignTo(e.target.value)
            }}
            style={{width:"400px",height:"40px"}} className='border border-1 border-dark rounded-1 bg-dark text-white' type="text" placeholder='Employee Name' />
        </div>
        <div>
        <h5 className='fw-bold fs-5 m-1 text-dark'>Cetegory</h5>
        <input 
        value={category}
        onChange={(e)=>{
            setCategory(e.target.value)
        }}
        style={{width:"400px",height:"40px"}} className='border border-1 border-dark rounded-1 bg-dark text-white' type="text" placeholder='Dev, Design...etc' />  
        </div>
    </div>
    <div className=' d-flex align-items-center'style={{justifyContent:"center"}} >
        <h5 className='fw-bold fs-5 text-center text-dark'>Description  <br />
        <textarea 
        value={description}
        onChange={(e)=>{
            setDescription(e.target.value)
        }}
        style={{width:"400px",height:"100px"}} className='border border-1 border-dark rounded-1 text-center bg-dark text-white ' placeholder='Enter Description' />  
        </h5>
       
    </div>
    <div className='d-flex align-items-center mt-2 mb-1 'style={{justifyContent:"center"}} >
    <button className='btn btn-success'>Create Task</button>
    </div>
    </form>
    </div>
  )
}

export default Createtask
