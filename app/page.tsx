"use client"

import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  // Function to add a new task
  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  // Function to delete a task
  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>To-Do App</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}