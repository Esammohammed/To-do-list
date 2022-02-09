import './Newtask.css'
import { useState } from "react";

const Newtask = (props) => {
  const [Newtask, setnewtask] = useState("");

  const Clickhandler = (event) => {
    props.Addnewtask(Newtask);
  };
  const Changehandler = (event) => {
    setnewtask(event.target.value);
  };
  return (
    <div>
      <div>
        <h2>To do list</h2>
      </div>
      <div>
          <h4>Add Task</h4>
        </div>
      <div className="newtask">
        
        <div >
          <input  Style = "margin-bottom: 10px" className="element"type="text" onChange={Changehandler} />
        </div>
        <div >
         
          <button  className="element" onClick={Clickhandler}>Add task</button>
        </div>
      </div>
    </div>
  );
};
export default Newtask;
