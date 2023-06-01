import Task from "./Task"

const Tasks = ({tasks, deleteTask, onToggleReminder}) => {

  return (
    <div >
        {tasks.map((task)=>(
         <Task text={task.text} day={task.day} deleteTask={deleteTask} reminder={task.reminder} id={task.id} key={task.id} onToggleReminder={onToggleReminder}/>
        ))}
    </div>
  )
}

export default Tasks