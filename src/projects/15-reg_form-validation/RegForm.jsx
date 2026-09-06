import Title from '../components/Title'
import Button from '../components/Button'
import Alert from '../components/Alert'
import { useEffect, useRef, useState } from 'react'

export default function RegForm() {
  let inputName = useRef(null)
  let inputEmail = useRef(null)
  let inputPassword = useRef(null)
  useEffect(() => {
    inputName.current.focus()
  }, [])
  const [values, setValues] = useState({
    user_name: '',
    email: '',
    password: '',
  })
  const [submit, setSubmit] = useState(false)
  const [valid, setValid] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.user_name) {
      inputName.current.focus()
    } else if (!values.email) {
      inputEmail.current.focus()
    } else if (!values.password) {
      inputPassword.current.focus()
    }
    if (values.user_name && values.email && values.password) {
      setValid(true)
    }
    setSubmit(true)
  }

  return (
    <div className='m-auto'>
      {/* Alert & Welcome */}
      {(submit && valid) ? (
        <>
          <Alert type={'success'} message={'Registration wss successfully'} delay={true} />
          <Title text={`Welcome ${values.user_name}`} />
        </>)

        :

        <div className="container m-auto mt-4 p-2 shadow-md border-5">
          <Title text={'Registration'} />
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <input type="text" ref={inputName} placeholder='Enter your username' value={values.user_name} onChange={(e) => setValues({ ...values, user_name: e.target.value })} />
              {(submit && !values.user_name) ? <label className="text-danger fs-sm">Pleace enter your name</label> : null}
            </div>

            <div className="form-group">
              <input type="email" ref={inputEmail} placeholder='Enter your email' value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
              {(submit && !values.email) ? <label className="text-danger fs-sm">Pleace enter your email</label> : null}
            </div>

            <div className="form-group">
              <input type="password" ref={inputPassword} placeholder='Enter your password' value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} />
              {(submit && !values.password) ? <label className="text-danger fs-sm">Pleace enter your password</label> : null}
            </div>
            <Button btnClass={'btn-primary btn-lg btn-block'} text={'Register'} />
          </form>
        </div>
      }
    </div>
  )
}

