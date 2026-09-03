import Title from '../components/Title'
import Button from '../components/Button'
import { useContext } from 'react'
import { ThemeContext } from './context/theme-context'

const Blog = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <div className='container p-1'>
      <Title text={`My Blog with ${theme} theme`} />
      <span style={{ position: 'absolute', top: 10, right: 10 }}>
        <Button text={theme === 'dark' ? 'Light' : 'Dark'}
          btnClass={`${theme === 'dark' && 'btn-light'} 'btn_sm' `}
          onClick={changeTheme} />
      </span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error dolorum, cum voluptatibus eaque illum, ab ut quae consequatur quasi deserunt sint earum facilis nostrum ad blanditiis aliquam. Ullam, officia!</p>
    </div>
  )
}

export default Blog
