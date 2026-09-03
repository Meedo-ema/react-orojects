import { useState } from 'react'
import Button from '../components/Button'

const TempratureControllerApp = () => {
  const [temprature, setTemprature] = useState(0)
  const handleAdd = () => {
    setTemprature(temprature + 1)
  }
  const handleSubtract = () => {
    setTemprature(temprature - 1)
  }
  return (
    <div className='container mt-3 text-center'>
      <div className="card m-auto bg-light" style={{ width: 200 }}>
        <h1 className={`text-light card border-50 ${temprature > 0 ? 'bg-danger' : 'bg-info'}`} style={{ height: 150, width: 150, border: "2px solid #666" }}>
          {temprature} C
        </h1>
        <div className="d-flex my-2">
          <Button text={'-'} btnClass={'btn-lg'} onClick={() => {
            handleSubtract()
          }} />
          <Button text={'+'} btnClass={'btn-lg'} onClick={() => {
            handleAdd()
          }} />
        </div>
      </div>
    </div>
  )
}

export default TempratureControllerApp
