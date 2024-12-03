import React, { useState } from 'react';

interface AddTaskProps {
  addTask: (task: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px' }}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;