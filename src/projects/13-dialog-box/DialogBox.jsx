import { useEffect, useState } from 'react'
import Button from '../components/Button'
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from 'react-icons/bs'
import './bounce.css'
export default function DialogBox() {
  const [subscription, setSubscription] = useState({
    title: 'Helllo',
    description: 'Would you like to subscripe?',
    state: null,
    justifyContent: 'space-between'
  })

  const handleSubscripe = () => {
    setSubscription({
      title: 'Thank you:)',
      description: 'See ya',
      state: 'subscriped',
      justifyContent: 'flex-end'

    })
  }

  const handleUnsubscripe = () => {
    setSubscription({
      title: 'Soory :(',
      description: 'To see you go',
      state: 'unsubscriped',
      justifyContent: 'flex-end'

    })
  }

  const [icon, setIcon] = useState()
  let iconStyle = {
    fontSize: '80px',
    justifySelf: 'center',
    color: subscription.state === 'subscriped' ? 'rgba(59, 137, 90, .4)' : 'rgba(25, 118, 160, .4)'
  }
  useEffect(() => {

    if (subscription.state === 'subscriped') {
      setIcon(<BsFillEmojiSmileFill style={iconStyle} />)
      document.body.style.background = 'rgba(59, 137, 90, .4)'
    }

    if (subscription.state === 'unsubscriped') {
      setIcon(<BsFillEmojiFrownFill style={iconStyle} />)
      document.body.style.background = 'rgba(25,118,160, .4)'
    }

  }, [subscription.state])

  const [bounce, setBounce] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setBounce('');
    }, 500)
    return () => setBounce('bounce')
  }, [subscription.state])

  return (
    <div className={`card bg-light mt-4 m-auto ${bounce}`} style={{ width: 350 }}>
      <div className="card-body">
        <div className="d-grid" style={{
          gridTemplateColumns: '2fr 1fr',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center'
        }}>
          <section>
            <h2 className='card-title'>{subscription.title}</h2>
            <h4 className='card-text'>{subscription.description}</h4>
          </section>
          <div>{icon}</div>
        </div>
      </div>
      <hr />
      <div className="d-flex mb-2 px-1 text-end"
        style={{
          width: '100%',
          justifyContent: `${subscription.justifyContent}`
        }}>
        {subscription.state === null && <Button text={'Cancel'} btnClass={'btn-light'} />}
        {subscription.state === 'subscriped' ? null : <Button text={'Subscripe'} btnClass={'btn-danger'} onClick={handleSubscripe} />}
        {subscription.state === 'subscriped' ? <Button text={'Unsubscripe'} btnClass={'btn-danger btn-block'} onClick={handleUnsubscripe} /> : null}

      </div>
    </div>
  )
}

