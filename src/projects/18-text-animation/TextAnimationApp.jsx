import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import FormGroup from '../components/FormGroup'
import AnimatedText from 'react-animated-text-content'

export default function TextAnimationApp() {
  const [inputValue, setInputValue] = useState("")
  const [animatedText, setAnimatedText] = useState()

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClear = () => {
    setAnimatedText(inputValue)
    setInputValue("")

  }
  let inputFocus = useRef(null)
  useEffect(() => {
    inputFocus.current.focus()
  })

  return (
    <div className='container text-center'>
      <form className="container d-flex mt-4" onSubmit={(e) => e.preventDefault()}>
        <FormGroup
          inputType={'text'}
          labelText={"Type in your text"}
          placeholder={'Your text'}
          values={inputValue}
          onChange={handleInputChange}
          ref={inputFocus}
        />
        <Button text={'Clear'} btnClass={"btn-large btn-danger"} onClick={handleClear} />
      </form>
      {animatedText &&
        <AnimatedText
          className='title'
          type='char'
          interval={.04}
          duration={1.1}
          animation={{
            x: '-100px',
            y: '-150px',
            ease: 'linear',
          }}
        >
          {animatedText}
        </AnimatedText>}
    </div>
  )
}

