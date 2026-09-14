import { useState } from 'react'
import Title from '../components/Title'
import { TableStyle } from './TableStyle'
import Task from './Task'
import NewTask from './NewTask'

export default function TasksTrackerApp() {

  const [newTask, setNewTask] = useState({
    date: '',
    type: '',
    completed: '',
  })

  const handleChangeDate = (e) => {
    setNewTask({ ...newTask, date: e.target.value })
  }

  const handleChangeType = (e) => {
    setNewTask({ ...newTask, type: e.target.value })
  }

  const [taskList, setTaskList] = useState([{ date: '', type: '' }])

  const addNewTask = () => {
    setTaskList([...taskList, newTask])
  }

  const toggleComplete = (e) => {
    e.target.classList.toggle('completed')

  }

  const deleteTask = (e) => {
    window.confirm('Delete this task ?') && e.target.parentElement.remove()
  }

  return (
    <>
      <Title text={'Task Tracker'} />
      <TableStyle>
        <ul className="table-head">
          <li>Date</li>
          <li>Task</li>
        </ul>
        <Task
          date={newTask.date}
          setDate={handleChangeDate}
          type={newTask.type}
          setType={handleChangeType}
          onClick={addNewTask}
        />
        <ul className="table-row">
          {taskList.map((tasky, index) => {
            return tasky.date !== '' && tasky.type !== '' ?
              <NewTask key={index} date={tasky.date} type={tasky.type} onTaskClick={toggleComplete} onDelete={deleteTask} />
              : null;
          })}
        </ul>
      </TableStyle>
    </>
  )
}

