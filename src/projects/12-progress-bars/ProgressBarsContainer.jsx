import { useEffect, useRef, useState } from 'react'
import { ProgressBar } from '../components/ProgressBar'
import Title from '../components/Title'

export default function ProgressBarsContainer() {
  const [completed, setCompleted] = useState(10)
  const [status, setStatus] = useState({
    ui: 55,
    ux: 33,
    data: 28,
  })
  const projectData = [
    { bgColor: '#7633f9', completed: status.ui },
    { bgColor: '#28a745', completed: status.ux },
    { bgColor: '#dc3545', completed: status.data },

  ]

  const inputStyle = {
    width: 50,
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    borderBottom: '1px solid lightgray',
  }

  const uiInput = useRef(null)
  useEffect(() => {
    uiInput.current.focus()
    setInterval(() => setCompleted(Math.floor(Math.random() * 100)), 2000)
  }, [])

  return (
    <div className='container container-sm mx-auto text-center'>
      <Title text={'Progress bars'} />
      <h2>Project status:</h2>
      <ul>
        <li>
          UI Status:{" "}
          <input type="number" style={inputStyle} value={status.ui} ref={uiInput} onChange={(e) => setStatus({ ...status, ui: e.target.value })} />

        </li>
        <li>
          UX Status:{" "}
          <input type="number" style={inputStyle} value={status.ux} onChange={(e) => setStatus({ ...status, ux: e.target.value })} />

        </li>
        <li>
          Data Status:{" "}
          <input type="number" style={inputStyle} value={status.data} onChange={(e) => setStatus({ ...status, data: e.target.value })} />

        </li>

      </ul>
      {projectData.map((data, idx) => {
        return (
          <ProgressBar key={idx} bgColor={data.bgColor} completed={data.completed} />
        )
      })}

      <ProgressBar bgColor={completed < 50 ? '#dc3545' : '#7633f9'} completed={completed} />

    </div>
  )
}

