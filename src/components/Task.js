// npm i react-icons
// "FaTimes" is the Font Awesome "X" symbol
// Don't forget to put "/fa" at the end of the import for Font Awesome

import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      onDoubleClick={() => onToggle(task.id)}
      // adding the task class as well as the reminder class if task.reminder is equal to true. Otherwise the only tag on the div is task.
      className={`task ${task.reminder ? 'reminder' : ''}`}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
