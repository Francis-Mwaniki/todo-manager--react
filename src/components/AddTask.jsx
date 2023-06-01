import React, {useState} from 'react'

const AddTask = ({onAddTask}) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false )

 const submit=(e)=>{
    e.preventDefault()

    if(!text){
        alert('please add task and day!')
    }else{
          onAddTask({ text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
    }
  
 }   
  return (
    <form className='add-task' onSubmit={submit}>
        <div className="form-control">
            <label htmlFor="Task">Task</label>
            <input type="text" name="task" value={text} onChange={(e)=>setText(e.target.value)} id="task" />
           
        </div>
        <div className="form-control">
            
            <label htmlFor="Day">Add Day & Time</label>
            <input type="text" name="day" value={day} onChange={(e)=>setDay(e.target.value)}  id="day" />
           
        </div>
        <div className="form-control form-control-check" style={{ paddingBottom:'10px'}}>
            
            <label htmlFor="Reminder" >Reminder</label>
            <input type="checkbox" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} checked={reminder}  name="reminder" id="reminder" />
        </div>
        <div className="form-control">
        <input type="submit" value="Save Task" className='btn btn-block' />

        </div>
    </form>
  )
}

export default AddTask