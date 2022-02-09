import logo from './logo.svg';
import Task from './Task/Task';
import './App.css';
import React, { useState }  from 'react';

import Card from './UI/Card';
import Newtask from './Newtask/Newtask';

let TaskList=["playing football", "studying",  "play music " , "dance" , "reading "];
function App() {
  
  const [Filteredtask , Updatetasks]= useState(TaskList);
  const ClearHandler=(event)=>{
  
    Updatetasks([]);
    TaskList= [];
  }
  const taskadded =(Newtask)=>{
console.log(Newtask)
    Updatetasks([Newtask,...Filteredtask]);
    TaskList.push(Newtask);
  }
  const Filterhandler  = (event) => {
    console.log(event.target.value)
    if (event.target.value.trim().length===0){
      Updatetasks(TaskList);
      return;
    }
    let filter=[]
    for  (let i = 0 ;i<TaskList.length ;i++){
    
      if (TaskList[i].includes(event.target.value)){
        console.log(TaskList[i]);
        filter.push(TaskList[i]);
      }
      
    }
    Updatetasks(filter);
  }
  

  return (

    <div className="App">

    <Card className="up">

    <Newtask Addnewtask = {taskadded}></Newtask>
    </Card>
    <Card>
    <h2>Tasks</h2>
    <input type = "text" placeholder='Filtertask' onChange={Filterhandler}/>
    
    {

      Filteredtask.map(Eachtask =><Task className = "task" Tasktext = {Eachtask} > </Task> )
     
    }
    <button onClick={ClearHandler} >Clear Task</button>
    </Card>
    </div>
  );
}

export default App;
