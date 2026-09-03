import Alert from "../components/Alert"


const AlertApp = () => {
  return (
    <div className='container mx-auto'>
      <Alert type={'success'} message={"Successfully LogIn"} />
      <Alert type={'info'} message={"Time Triggered"} delay={true} delayTime={1000} />
      <Alert type={'danger'} message={"Successfully LogIn"} delay={true} delayTime={2000} />
    </div>
  )
}

export default AlertApp
