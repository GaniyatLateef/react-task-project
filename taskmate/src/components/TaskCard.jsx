import React from "react";
import "./taskCard.css";
import styles from  "./taskCard.module.css"

const TaskCard = ({ task, handleDelete, info}) => {
  return (
    <div className="task-card">
       <li className={task.completed ? "completed" : "incomplete"}>
         <span className={styles.title}>
           {task.id} - {task.name} - {info}
         </span>
         <button onClick={() => handleDelete(task.id)} className="delete">
           Delete
         </button>
       </li>
    </div>
  );
};

export default TaskCard;
