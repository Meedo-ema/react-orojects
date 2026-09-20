import { useEffect, useRef, useState } from 'react'
import Title from '../components/Title'
import FormGroup from '../components/FormGroup'
import Auth from './components/Auth'
import { Wrapper } from './components/Wrapper.style'
import { AuthContext } from './context/auth-context'
import { useContext } from 'react'

export default function AuthApp() {
  //UI controll
  const [ui, setUi] = useState({
    wrapper: true,
    title: 'Authenticate',
  })

  //Animation controll
  const [animateDenied, setAnimateDenied] = useState(false)

  //Autofocus
  const inputFocus = useRef(null)
  useEffect(() => {
    inputFocus.current.focus()
  }, [inputFocus])

  //Controll name & password
  const [userAuth, setUserAuth] = useState({
    name: '',
    password: '',
  })

  const [authStatus, setAuthStatus] = useState(null)
  const login = () => {
    if (userAuth.name === 'mohamed' && userAuth.password === '12345') {
      setAuthStatus(true)
      clearInputs()
      authenticate()
    } else {
      setAuthStatus(false)
      setAnimateDenied(true)
      setTimeout(() => {
        setAnimateDenied(false)
      }, 600)
    }
  }

  function clearInputs() {
    setUserAuth({
      name: '',
      password: '',
    })
  }
  function authenticate() {
    setUi({
      wrapper: false,
      title: `welcome ${userAuth.name}`,
    })
  }

  const logout = () => {
    window.location.reload()
  }



  return (
    <div className='container' style={{ width: 300 }}>
      <Title text={ui.title} />
      <AuthContext.Provider value={{
        status: authStatus,
        login: login,
        logout: logout,
      }}>
        {ui.wrapper && (
          <Wrapper className={animateDenied && 'active'}>
            <FormGroup
              labelText={'User Name'}
              inputType={'text'}
              placeholder={'Enter your name'}
              value={userAuth.name}
              ref={inputFocus}
              onChange={(e) => {
                setUserAuth({
                  ...userAuth,
                  name: e.target.value
                })
              }}
            />
            <FormGroup
              labelText={'Password'}
              inputType={'password'}
              placeholder={'Enter your password'}
              value={userAuth.password}
              onChange={(e) => {
                setUserAuth({
                  ...userAuth,
                  password: e.target.value
                })
              }}

            />
          </Wrapper>
        )}
        <Auth />
      </AuthContext.Provider>
    </div>
  )
}

