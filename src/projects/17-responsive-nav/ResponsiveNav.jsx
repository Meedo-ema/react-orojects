import { useEffect, useState } from "react"
import NavItem from "./NavItem"
import { NavStyle } from "./NavStyle"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const ResponsiveNav = () => {
  const [showElement, setShowElement] = useState({
    navBarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  })

  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    const handleResize = () => {
      let windowWidth = window.innerWidth
      console.log(windowWidth)
      windowWidth > 600 && setShowElement({ navBarNav: true, hamburgerIcon: false })
      windowWidth < 600 && setShowElement({ navBarNav: false, hamburgerIcon: true })
    }
    handleResize()
    window.onresize = () => {
      handleResize()
    }
  }, [])

  const openNav = () => {
    setShowElement({
      navBarNav: true,
      hamburgerIcon: false,
      closeIcon: true,
      navOpened: true,
    })
  }

  const closeNav = () => {
    setShowElement({
      navOpened: false,
      hamburgerIcon: true,
      closeIcon: false,
      navOpened: false,
    })
  }

  const handleActive = (e) => {
    document
      .querySelectorAll(".nav-link")
      .forEach((navLink) => navLink.classList.remove('active'))
    e.target.classList.add('active')
    setPageTitle(e.target.innerText)
  }

  return (
    <>
      <NavStyle className={`bg-primary text-light navbar ${showElement.navOpened && "showNavbar"}`}>
        <div className='navbar-logo'>
          <a href="#" className='navbar-brand'>
            MEO
          </a>
          {/* open & close icons */}
          {showElement.hamburgerIcon && <AiOutlineMenu onClick={openNav} />}
          {showElement.closeIcon && <AiOutlineClose onClick={closeNav} />}
        </div>
        <div className="nvabar-collapse">
          {showElement.navBarNav ? <ul className={`navbar-items ${showElement.navOpened && "showNavbar"}`}>
            <NavItem text={'Home'} active={'active'} onClick={handleActive} />
            <NavItem text={'About'} onClick={handleActive} />
            <NavItem text={'Contact'} onClick={handleActive} />
          </ul> : null}
        </div>
      </NavStyle>
      <h1 className='title text-center text-primary'>{!pageTitle ? 'Home' : pageTitle}</h1>
    </>
  )
}

export default ResponsiveNav
