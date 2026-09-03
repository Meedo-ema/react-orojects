import React, {useState} from "react"
import Title from "./components/Title"

export default function EsignatureApp() {
  const [name, setName]= useState("")
  const [date, setDate] = useState('')
  const inputStyle = {
    border: 'none',
    borderBottom: '2px dotted',
    outline: 'none',
    padding: '.35rem 0'
  }
  document.body.style.background = '#eee'
  return (
    <div className="container text-center">
      <Title classes={'title-main'} text={name} />
      <Title classes={'title mb-4'} text={!date ? 'Dob' : date} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore animi ex quae obcaecati. Maxime a quia, unde neque, consequatur odio sit qui provident hic enim saepe ut tempora dolores.
      </p>
      <footer className='d-flex' style={{
        justifyContent: 'space-around',
        position: 'relative',
        top: '40vh'
      }}>
        <input type="date" onChange={(e)=>setDate(e.target.value)} value={date} style={inputStyle} />
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} style={inputStyle} />
      </footer>
    </div>
  )
}

