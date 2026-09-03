import React from "react"
import Title from '../components/Title'


const RandomizeColor = () => {
  const handleClick = (e) => {
    document.body.style.background = getRandomColor()
    e.target.style.background = getRandomColor()
  }

  function getRandomColor(){
    const letter = "0123456789ABCDEF"
    let color = "#"
    for(let i =0; i < 6; i++){
      color += letter[Math.floor(Math.random() * 16)]
    }
    return color
  }
  return (
    <div className='container m-auto text-center'>
      <Title text={'RandomizeColor'} classes={'mb-4'} />
      <button className="btn btn-danger" onClick={handleClick}>Click me</button>
      <button className="btn btn-success" onClick={handleClick}>Click me</button>
      <button className="btn btn-primary" onClick={handleClick}>Click me</button>
      <button className="btn btn-warning" onClick={handleClick}>Click me</button>

    </div>
  )
}

export default RandomizeColor
