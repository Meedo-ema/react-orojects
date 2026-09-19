import { useContext, useEffect, useState } from "react"
import Button from "../../components/Button"
import { CurrenciesContext } from "../context/currencies-context"

const Course = ({ course }) => {
  const { title, img, price } = course

  const currency = useContext(CurrenciesContext)
  const currencyPrice = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: currency.code
  }).format(price * currency.conversionRate)

  //Change Course BG
  const [courseBg, setCoursrBg] = useState()
  useEffect(() => {
    if (currency.code === 'USD') {
      setCoursrBg('card-light')
    }
    if (currency.code === 'EUR') {
      setCoursrBg('card-primary')
    }
    if (currency.code === 'GBP') {
      setCoursrBg('card-danger')
    }
  }, [currency.code])

  return (
    <li className={`card ${courseBg} mb-2`} style={{ width: 250 }}>
      <div className="card-header">{title}</div>
      <img src={img} alt="course image" style={{ height: '100%' }} />
      <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore iste libero esse! Iste nemo libero ea repellat aspernatur sed suscipit rerum? Aspernatur ad molestias minus incidunt provident repellendus magni.</p>
      <div className="card-footer d-flex space-between">
        <h4>{currencyPrice}</h4>
        <Button btnClass={'btn-success'} text={'BUY'} />
      </div>
    </li>
  )
}

export default Course
