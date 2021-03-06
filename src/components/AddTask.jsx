import { useState } from 'react';

const AddTask = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="add-form" onSubmit={handleOnSubmit}>
      <div className="form-control">
        <label htmlFor="task" style={{ cursor: 'pointer' }}>
          Task
        </label>
        <input
          id="task"
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day-time" style={{ cursor: 'pointer' }}>
          Day & Time
        </label>
        <input
          id="day-time"
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder" style={{ cursor: 'pointer' }}>
          Set Reminder
        </label>
        <input
          id="reminder"
          type="checkbox"
          style={{ cursor: 'pointer' }}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
