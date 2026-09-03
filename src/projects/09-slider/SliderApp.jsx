import { useState } from "react"
import Title from "../components/Title"
import SliderComp from "./SliderComp"

export default function SliderApp() {
  const [sliderValue, setSliderValue] = useState(0)
  const handleSliderValueChange = (e) => {
    setSliderValue(e.target.value)
  }
  let bgColor;
  let textColor;

  if (sliderValue <= 25) {
    bgColor = 'red'
    textColor = 'green'
  }
  if (sliderValue > 25 && sliderValue <= 50) {
    bgColor = 'blue'
    textColor = 'red'
  }
  if (sliderValue > 50 && sliderValue <=75) {
    bgColor = 'black'
    textColor =  'white'
  }
  return (
    <div className='container text-center'>
      <Title text={'Slide To Grow'} />
      <SliderComp setValue={sliderValue} handleInput={handleSliderValueChange} bgColor={bgColor} textColor={textColor} />
    </div>
  )
}

