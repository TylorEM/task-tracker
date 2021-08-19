// npm i react-icons
// "FaTimes" is the Font Awesome "X" symbol
// Don't forget to put "/fa" at the end of the import for Font Awesome

import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
  return (
    <div className='task'>
      <h3>{task.text}</h3> <FaTimes />
      <p>{task.day}</p>
    </div>
  )
}

export default Task
