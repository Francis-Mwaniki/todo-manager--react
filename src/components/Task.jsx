import {FaTimes} from "react-icons/fa"
const Task = ({text,day,id,deleteTask,onToggleReminder,reminder}) => {
    
  return (
    <div className={`task ${reminder ? 'reminder': ''}`}  onDoubleClick={()=>{onToggleReminder(id)}}>
   <h3>{text}
   <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>deleteTask(id)}/>
   </h3>
    <p>{day}</p>
    </div>
  )
}

export default Task