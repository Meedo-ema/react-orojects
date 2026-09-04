import Popup from "../components/Popup.component"
import Button from "../components/Button"
import Title from '../components/Title'
import { useEffect, useState } from "react"

const PopupApp = () => {
  const [trigger, setTrigger] = useState(false)
  const [timeTrigger, setTimeTrigger] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTimeTrigger(true)
    }, 3000)
  }, [])

  const triggerPopup = () => {
    setTrigger(true)
  }


  return (
    <div className='text-center'>
      <Title text={'Click for Popup , or wait 3 seconds'} />
      <Button btnClass={'btn-primary'} onClick={triggerPopup} />
      <Popup type={"alert-info"}
        title={'triggered Popup'}
        text={'This popup was triggered by button'}
        handleClose={setTrigger}
        trigger={trigger} />
      <Popup type={"alert-danger"}
        title={'triggered Popup'}
        text={'This popup was triggered by button'}
        handleClose={setTimeTrigger}
        trigger={timeTrigger} />

    </div>
  )
}

export default PopupApp
