import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

      const addTask = () => {
          if (task.trim()) {
                setTasks([...tasks, task]);
                      setTask('');
                          }
                            };

                              return (
                                  <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                                        <h1>Baby AGI Dashboard</h1>
                                              <input 
                                                      value={task} 
                                                              onChange={(e) => setTask(e.target.value)} 
                                                                      placeholder="Enter a task..." 
                                                                            />
                                                                                  <button onClick={addTask}>Add Task</button>
                                                                                        
                                                                                              <ul>
                                                                                                      {tasks.map((t, index) => <li key={index}>{t}</li>)}
                                                                                                            </ul>
                                                                                                                </div>
                                                                                                                  );
                                                                                                                  }

                                                                                                                  export default App;
                                                                                                                  