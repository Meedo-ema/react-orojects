import Button from '../components/Button'

const Task = ({ date, setDate, type, setType, onClick }) => {
  return (
    <div className='d-flex' style={{ justifyContent: 'space-between', borderBottom: '1px solid #666', marginBottom: '2rem' }}>
      <input type="datetime-local" value={date} onChange={setDate} />
      <input type="texi" value={type} onChange={setType} placeholder='Specify the task' />
      <Button text={'+ Add'} onClick={onClick} />
    </div>
  )
}

export default Task
