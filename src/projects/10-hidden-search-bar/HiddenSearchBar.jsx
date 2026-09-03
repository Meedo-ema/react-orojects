import { useEffect, useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export default function HiddenSearchBar() {
  const [uiProps, setUiProps] = useState({
    bg: 'purple',
    shadow: '',
    transitions: 'all .3s ease',
    showSearchIcon: true,
    borderBottomColor: '#fff',
    opacity: 0,
    showSearchBar: false,
  })
  let body = document.body.style

  let inputStyle = {
    margin: "10vh 25vw",
    width: '20vh',
    height: '30px',
    padding: '1rem .3rem',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    borderBottom: `1px solid ${uiProps.borderBottomColor}`,
    fontSize: '1.3rem',
    color: '#eee',
    boxShadow: '0px 55px 60px -15px rgba(0,0,0,0.75)',
    opacity: uiProps.opacity,
    transitions: 'all .3s ease',

  }
  let bsSearch = {
    color: '#fff',
    fontSize: 50,
    cursor: 'pointer',
    position: 'absolute',
    top: 20,
    right: 20
  }
  const inputEl = useRef(null)
  useEffect(() => {
    body.background = uiProps.bg
    body.boxShadow = uiProps.shadow
    body.transitions = uiProps.transitions
    uiProps.showSearchBar && inputEl.current.focus();
  }, [uiProps.shadow, uiProps.showSearchBar])

  const showSearch = () => {
    setUiProps({
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true
    })
  }

  const handleSearchFocus = () => {
    setUiProps({
      shadow: 'inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)',
      borderBottomShadow: 'green'
    })
  }

  const handleSearchBlur = () => {
    setUiProps({
      shadow: 'none',
      borderBottomColor: '#fff',
      opacity: 0,
      showSearchIcon: true
    })
  }

  return (
    <div className='container' style={{ height: '100vh' }}>
      {uiProps.showSearchIcon ?
        <BsSearch style={bsSearch} onClick={showSearch} /> :
        (<input type="text" placeholder='Search' style={inputStyle} onFocus={handleSearchFocus} onBlur={handleSearchBlur} ref={inputEl} />
        )
      }
    </div>
  )
}

