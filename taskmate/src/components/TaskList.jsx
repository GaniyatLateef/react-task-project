import React, {useState} from 'react';
import TaskCard from "./TaskCard.jsx";
import BoxCard from "./BoxCard.jsx";
import "./taskList.css"

const TaskList = ({info}) => {
    const [tasks, setTasks] = useState([
        {id: 1, name: "Record lectures", completed: true},
        {id: 2, name: "Edit lectures", completed: false},
        {id: 3, name: "Watch lectures", completed: false},
    ]);

    const [show, setShow] = useState(true);
    const styles = {
        color: show ? "#3D8361" : "#be3434",
        border: "2px solid",
        borderColor: show ? "#3D8361" : "#be3434",
        borderRadius: "5px",
        fontSize: "28px",
        padding: "20px"
    }

    function handleDelete(id) {
        setTasks(tasks.filter((task) => task.id !== id));

    }

    return (
        <div className='taskList'>
            <h1 style={styles}>Tasks List</h1>
            <ul>
                <button className='trigger' onClick={() => setShow(!show)}>{ show ? "Hide Tasks" : "Show Tasks"}</button>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} info={info} task={task} handleDelete={handleDelete}/>
                ))}
            </ul>
            <BoxCard result='success'>
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde.</p>
            </BoxCard>
            <BoxCard result='warning'>
                <p className="title">Lorem ipsum dolor.</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nemo.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, voluptatum.</p>

            </BoxCard>
        </div>
    );
};

export default TaskList;