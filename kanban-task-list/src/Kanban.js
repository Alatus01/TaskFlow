import React, { useState } from 'react';
import './Kanban.css';

const Kanban = () => {
  const [tasks, setTasks] = useState({
    notStarted: [],
    twentyFivePercent: [],
    fiftyPercent: [],
    seventyFivePercent: [],
    hundredPercent: [],
    reviewed: []
  });

  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [taskName, setTaskName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [taskPriority, setTaskPriority] = useState(50); // Slider value (0-100)
  const [taskDescription, setTaskDescription] = useState('');
  const [taskNotes, setTaskNotes] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu visibility

  const addTask = (column) => {
    if (taskName.trim() === '') return;
    const newTask = {
      id: Date.now(),
      name: taskName,
      startDate,
      endDate,
      startTime,
      endTime,
      priority: taskPriority,
      description: taskDescription,
      notes: taskNotes
    };
    setTasks({
      ...tasks,
      [column]: [...tasks[column], newTask]
    });
    // Clear input fields
    setTaskName('');
    setStartDate('');
    setEndDate('');
    setStartTime('');
    setEndTime('');
    setTaskPriority(50);
    setTaskDescription('');
    setTaskNotes('');
  };

  const moveTask = (fromColumn, toColumn, taskId) => {
    const task = tasks[fromColumn].find(task => task.id === taskId);
    setTasks({
      ...tasks,
      [fromColumn]: tasks[fromColumn].filter(task => task.id !== taskId),
      [toColumn]: [...tasks[toColumn], task]
    });
  };

  const deleteTask = (column, taskId) => {
    setTasks({
      ...tasks,
      [column]: tasks[column].filter(task => task.id !== taskId)
    });
  };

  const filteredTasks = (column) => {
    return tasks[column].filter(task =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle dropdown menu visibility
  };

  return (
    <div className="kanban">
      {/* Top Ribbon */}
      <div className="top-ribbon">
        <div className="ribbon-left">
          <h1 className="kanban-title">Kanban</h1>
        </div>
        <div className="ribbon-right">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <button className="ribbon-button">Projects</button>
          <button className="ribbon-button">Calendar</button>
          <div className="menu-container">
            <button className="menu-icon" onClick={toggleMenu}>☰</button>
            {isMenuOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item">Home</button>
                <button className="dropdown-item">Mail</button>
                <button className="dropdown-item">Labels</button>
                <button className="dropdown-item">Collections</button>
                <button className="dropdown-item">Settings</button>
                <button className="dropdown-item">Log Out</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Second Ribbon */}
      <div className="second-ribbon">
        <div className="task-input-container">
          <div className="task-input-column">
            <label>Enter Task Name</label>
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <div className="date-time-container">
              <div className="date-inputs">
                <label>Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <label>End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="time-inputs">
                <label>Start Time</label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
                <label>End Time</label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="task-input-column">
            <label>Task Priority</label>
            <input
              type="range"
              min="0"
              max="100"
              value={taskPriority}
              onChange={(e) => setTaskPriority(e.target.value)}
            />
            <label>Task Description</label>
            <textarea
              placeholder="Describe the task..."
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <div className="task-input-column">
            <label>Notes</label>
            <textarea
              placeholder="Add notes..."
              value={taskNotes}
              onChange={(e) => setTaskNotes(e.target.value)}
            />
            <button className="add-media-button">Add Media Files</button>
          </div>
        </div>
        <button className="add-task-button" onClick={() => addTask('notStarted')}>
          Add Task
        </button>
      </div>

      {/* 6 Columns */}
      <div className="columns-container">
        {/* Not Started Column */}
        <div className="column">
          <h2>Not Started</h2>
          {filteredTasks('notStarted').map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <button onClick={() => moveTask('notStarted', 'twentyFivePercent', task.id)}>→</button>
              <button onClick={() => deleteTask('notStarted', task.id)}>Delete</button>
            </div>
          ))}
        </div>

        {/* 25% Finished Column */}
        <div className="column">
          <h2>25% Finished</h2>
          {filteredTasks('twentyFivePercent').map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <button onClick={() => moveTask('twentyFivePercent', 'fiftyPercent', task.id)}>→</button>
              <button onClick={() => deleteTask('twentyFivePercent', task.id)}>Delete</button>
            </div>
          ))}
        </div>

        {/* 50% Finished Column */}
        <div className="column">
          <h2>50% Finished</h2>
          {filteredTasks('fiftyPercent').map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <button onClick={() => moveTask('fiftyPercent', 'seventyFivePercent', task.id)}>→</button>
              <button onClick={() => deleteTask('fiftyPercent', task.id)}>Delete</button>
            </div>
          ))}
        </div>

        {/* 75% Finished Column */}
        <div className="column">
          <h2>75% Finished</h2>
          {filteredTasks('seventyFivePercent').map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <button onClick={() => moveTask('seventyFivePercent', 'hundredPercent', task.id)}>→</button>
              <button onClick={() => deleteTask('seventyFivePercent', task.id)}>Delete</button>
            </div>
          ))}
        </div>

        {/* 100% Finished Column */}
        <div className="column">
          <h2>100% Finished</h2>
          {filteredTasks('hundredPercent').map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <button onClick={() => moveTask('hundredPercent', 'reviewed', task.id)}>→</button>
              <button onClick={() => deleteTask('hundredPercent', task.id)}>Delete</button>
            </div>
          ))}
        </div>

        {/* Reviewed Column */}
        <div className="column">
          <h2>Reviewed</h2>
          {filteredTasks('reviewed').map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <button onClick={() => deleteTask('reviewed', task.id)}>Delete</button>
            </div>
          ))}
        </div>

        {/* Sort and Filter Buttons */}
        <div className="sort-filter-buttons">
          <button className="sort-filter-button">Sort</button>
          <button className="sort-filter-button">Filter</button>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
