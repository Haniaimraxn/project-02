import React from 'react';

interface TaskListProps {
  tasks: string[];
  deleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available. Add some!</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px' }}>{task}</span>
            <button onClick={() => deleteTask(index)} style={{ padding: '5px' }}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;