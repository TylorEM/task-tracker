// npm i react-icons
// "FaTimes" is the Font Awesome "X" symbol
// Don't forget to put "/fa" at the end of the import for Font Awesome

import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h3>
        {task.text}
        <FaTimes
          onClick={onDelete}
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
