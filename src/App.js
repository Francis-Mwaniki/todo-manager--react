// import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import React, { useState, useEffect} from 'react'

function App() {
  const [tasks,setTasks]=useState([])
  const [showAddTask, setShowAddTask]=useState(false)

  useEffect(()=>{
    const getTask=async()=>{
      const taskFromServer=await fetchTasks()
      setTasks(taskFromServer)
    }
    getTask()
  },[])
  const fetchTasks=async()=>{
    let res=await fetch('http://localhost:3000/tasks')
    let data=await res.json()
    return data
  }
  const fetchTask=async(id)=>{
    let res=await fetch(`http://localhost:3000/tasks/${id}`)
    let data=await res.json()
    return data
  }

  const onAddTask=async(task)=>{
    /* const id=Math.floor(Math.random() * 1000 + 1)
    const newTask={id,...task}
    setTasks([...tasks, newTask]) */
    let res=  await fetch(`http://localhost:3000/tasks/`,{ method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(task)
   
  })
  if(res.ok){
    let data= await res.json()
    setTasks([...tasks, data])
    // alert('Data was added')
  }
  }
  const deleteTask=async(id)=>{
     await fetch(`http://localhost:3000/tasks/${id}`,{ method:'DELETE'})
     setTasks(tasks.filter((task)=> task.id !== id))
      //  alert(`Deleted task ${id}`);
  }
  const toggleReminder=async(id)=>{
    let taskToToggle= await fetchTask(id)
    let updateToggleTask={...taskToToggle,reminder: !taskToToggle.reminder}
    
    const res = await fetch(`http://localhost:3000/tasks/${id}`,{ 
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
    body:JSON.stringify(updateToggleTask)
  
  })
  if(res.ok){
    let data = await res.json()
    //  setTasks(tasks.filter((task)=> task.id !== id))
      // alert(`Deleted task ${id}`);
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:!data.reminder}: task)) 
  // alert('task of ' + id + "was updated")
  }
 
  }

  return (
    <div className="container">
     <Header title='Task Manager' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
   { showAddTask && <AddTask onAddTask={onAddTask}/> }
    { tasks.length>0 ? <Tasks  tasks={tasks} deleteTask={deleteTask} onToggleReminder={toggleReminder}/>: " No Tasks Available at the moment 😕😕"}
    </div>
  );
}

export default App;
