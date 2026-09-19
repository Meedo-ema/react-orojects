import { useState } from "react"
import Button from "../components/Button"
import Courses from "./components/Courses"

//DB
import { coursesDB } from "./db/coursesDB"
import { currenciesDB } from "./db/currenciesDB"

//Contrxt
import { CurrenciesContext } from './context/currencies-context'

document.body.style.background = "#282c34"
document.body.style.color = "#eee"

const Store = () => {
  const [currency, setCurrency] = useState(currenciesDB.Euro)

  const handleCurrency = (cur) => {
    setCurrency(cur)
  }
  return (
    <CurrenciesContext.Provider value={currency}>
      <div className='container p-1'>
        <h4 className='mb-2'>Change Currency:</h4>
        {Object.values(currenciesDB).map((cur) =>

          <Button key={cur.label}
            text={cur.code}
            btnClass={'btn-light btn-sm'}
            onClick={() => handleCurrency(cur)}
          />)
        }
        <header className='text-center my-4'>
          <h1 className='title fs-xl'>Course</h1>
          <h2 className='text-uppercase mb-2'>Become A Web Devoloper</h2>
          <p className='mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus voluptatibus ipsum in vitae sint ex perspiciatis alias. Ipsam nemo quidem minus ipsa dolor assumenda dolorem, officia laudantium harum optio.</p>
        </header>
        <Courses list={coursesDB} />
      </div>
    </CurrenciesContext.Provider>
  )
}

export default Store
