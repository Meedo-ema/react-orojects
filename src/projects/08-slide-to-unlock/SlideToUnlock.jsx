import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai"
import { useState } from "react";
import HomeScreenImg from './img/light.jpg'
import LockScreenImg from './img/dark.jpg'

export default function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: 'Slide To Lock',
    uiColor: '#eee',
    uiBg: `url(${LockScreenImg}) center/cover no-repeat`,

  })
  const [showLockSlider, setShowLockSlider] = useState(true)
  const [lockSliderValue, setLockSliderValue] = useState(0)

  const handleLockSliderInput = (e) => {
    const value = Number(e.target.value)
    setLockSliderValue(value)
    if (value >= 97) {
      setShowLockSlider(false)
      setUiProps({ ...uiProps, uiText: 'Unlock Screen', uiBg: `url(${HomeScreenImg}) center/cover no-repeat` })
    }
  }

  function unlockScreen() {
    if (showLockSlider === false) {
      setShowLockSlider(true)
      setUiProps({ ...uiProps, uiText: 'Slide To Lock', uiBg: `url(${LockScreenImg}) center/cover no-repeat` })
      setLockSliderValue(0)
    }
  }

  return (
    <div className='container text-center d-flex flex-column border-20 shadow-md' style={{
      height: '70vh',
      marginTop: '15vh',
      width: 340,
      border: '4px solid #000',
      background: uiProps.uiBg,
    }}>
      <h1 className='title' style={{ color: uiProps.uiColor }}>{uiProps.uiText}</h1>
      {showLockSlider ?
        (<LockSlider width={'250px'} handleInput={handleLockSliderInput} sliderValue={lockSliderValue} />) :
        (<AiFillUnlock className='unlockIcon' onClick={unlockScreen} />)}
    </div>
  )
}

