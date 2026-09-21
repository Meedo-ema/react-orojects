import { useState } from "react"
import SpeechNarrator from "./SpeechNarrator"

const SynthesizerApp = () => {
  const [text, setText] = useState("text")
  return (
    <div className='container d-flex flex-column'>
      <SpeechNarrator text={text} />
      <textarea rows="10" cols="30" value={text}
        onChange={(e) => setText(e.target.value)}></textarea>

    </div>
  )
}

export default SynthesizerApp
