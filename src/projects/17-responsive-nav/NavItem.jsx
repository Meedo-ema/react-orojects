
const NavItem = ({ text, active = "", onClick }) => {
  return (
    <li className="nav-item">
      <a href="#" className={`nav-link ${active}`} onClick={onClick}>
        {text}
      </a>
    </li>
  )
}

export default NavItem
