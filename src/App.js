import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Form from "./components/Form.js";
import Tasks from "./components/Tasks";
import About from "./components/About.js";
import Footer from "./components/Footer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasksFromServer = async () => {
      const data = await getTasks();
      setTasks(data);
    }

    getTasksFromServer();
  }, [])

  const getTasks = async () => {
    const res = await fetch('http://localhost:3000/tasks')
    const data = await res.json();
    return data;
  }

  const getTask = async (id) => {
    const res = await fetch('http://localhost:3000/tasks/'+id)
    const data = await res.json();
    return data;
  }

  const addTask = async (task) => {

    const res = await fetch ('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const newTask = await res.json();

    setTasks([...tasks, newTask]);


  }

  const deleteTask = async (id) => {
    const task = await getTask(id);
    if (task) {
      await fetch ('http://localhost:3000/tasks/'+id, {
        method: 'DELETE'
      });
      setTasks(tasks.filter(task => task.id !== id))
    } else {
      alert('There is no task with this id')
    }
  }

  const toggleReminder = async (id) => {
    const task = await getTask(id);
    if (task) {
      const updTask = {...task, reminder: !task.reminder};
      const res = await fetch ('http://localhost:3000/tasks/'+id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updTask)
      });
  
      const newTask = await res.json();
  
      setTasks(tasks.map(task => { return task.id === id ? {...task, reminder : newTask.reminder} : task }))
    } else {
      alert('There is task with this id')
    }
  }

  const toggleShowForm = () => {
    setShowForm(!showForm);
  }

  return (
    <Router>
      <div className="container">
        <Header onToggle = {toggleShowForm} opened = {showForm}/>
        <Routes>
          <Route path="/" 
            element={
              <>
                {showForm ? 
                  <Form onAdd={addTask} /> 
                : 
                  '' 
                }

                {
                  tasks.length === 0 ? 
                    <h3 className="tasks" style={{textAlign: 'center'}}>There is no tasks to show</h3>
                  : 
                    <Tasks tasks = {tasks} onDelete={deleteTask} onToggle = {toggleReminder}/>
                }
              </>
            } 
          />
          <Route path="/about" element = {<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
