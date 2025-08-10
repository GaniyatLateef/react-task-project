import React from 'react';
import TaskList from "./components/TaskList.jsx";
import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const info = 'Random';

    return (
        <div className='App'>
            <Header />
            <TaskList info= {info} />
            <Footer />
        </div>
    );
}

export default App;