import { useState } from "react";
import styles from "./Task.module.css";


const Task = (props) => {
  const [Finishedtask, MarkFinishedtask] = useState(0);
  const clickhandler = (event) => {
    Finishedtask?MarkFinishedtask(false):MarkFinishedtask(true);
    
  };
  return (
    <div class=  {styles.Parent} >
    {
        
        Finishedtask?<strike> {props.Tasktext}</strike> :  <p className={'.Parent'} >{props.Tasktext} </p>
    }
    
      <button onClick={clickhandler}> X </button>
    </div>
  );
};
export default Task;
