import { useState } from 'react'
import { AiOutlineRobot, AiFillRobot } from 'react-icons/ai'
const SpeechNarrator = ({ text }) => {

  const splitText = (text, from, to) => [
    text.slice(0, from),
    text.slice(from, to),
    text.slice(to)
  ]
  const [highLightSection, setHighLightSection] = useState({
    from: 0,
    to: 0,
  })

  const robotStyle = {
    fontSize: 100,
    padding: 0,
    cursor: 'pointer',
  }

  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.addEventListener('boundary', ({ charIndex, charLength }) => {
    setHighLightSection({ from: charIndex, to: charIndex + charLength })
  })

  const HighLightedText = ({ text, from, to }) => {
    const [start, highLight, finish] = splitText(text, from, to)
    return (
      <div className="card" style={{ width: 500 }}>
        {start}
        <span className='bg-warning'>{highLight}</span>
        {finish}
      </div>
    )
  }

  //Sybth states
  const [showPlay, setShowPlay] = useState(false)
  const [rateValue, setRateValue] = useState(1)
  //Handelers
  const handlePaly = () => {
    synth.speak(utterance)
    setShowPlay(true)
    synth.resume()
  }
  const handlePause = () => {
    synth.pause()
    setShowPlay(false)
  }
  utterance.rate = rateValue;
  return (
    <div className='container d-flex flex-column my-3' style={{ gap: 30 }}>
      <h1>Speech Narrator</h1>
      {showPlay ?
        <AiFillRobot style={robotStyle} className='text-primary' onClick={handlePause} /> :
        <AiOutlineRobot style={robotStyle} className='text-primary' onClick={handlePaly} />}
      <HighLightedText text={text} {...highLightSection} />
      <div className="form-group">
        <label>Rate: {rateValue}</label>
        <input type="range" step=".1" max='2' min='.5' value={rateValue}
          onChange={(e) => setRateValue(e.target.value)}
        />
      </div>

    </div>
  )
}

export default SpeechNarrator
