import { useState } from 'react'
import './App.css'
import Input from './input.jsx';
import Navbar from './navbar.jsx';
import Information from './information.jsx';

function App() {

    const [Name, setName] = useState(null);
    const [Occupation, setOccupation] = useState(null)
    const [tasks, setTasks] = useState([
        { id : 1, tasks: "Eat food", checked: false }, 
        { id : 2, tasks: "Eat water", checked: false }
    ])

    const toggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

  return (
      <>

      <div className="Title-text">
        I STEAL YOUR INFORMATION
          </div>

      <div className="question-divs">
              <div style={{ fontSize: '20px', color: 'blue' }}>
            But i'll give you a cookie
            </div>
              <Input inputType="Name" input={Name} setInput={setName} />
              <Input inputType="Occupation" input={Occupation} setInput={setOccupation} />
              {tasks.map((item) => (
                  <p>
                  <input type="Checkbox" checked={item.completed} onChange={(() => toggleTask(item.id))} />
                      {item.tasks }
                  </p>
              ))}
            


      </div>
    <Information Name={Name} Occupation={Occupation} />


    </>
  )
}

export default App
