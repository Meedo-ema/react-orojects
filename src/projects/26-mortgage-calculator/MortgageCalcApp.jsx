import Title from '../components/Title'
import FormGroup from '../components/FormGroup.jsx'
import Button from '../components/Button'
import { useState } from 'react';

export default function MortgageCalcApp() {

  //States
  const [homeValue, setHomeValue] = useState('')
  const [downPayment, setDownPayment] = useState('')
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [loanDuration, setLoanDuration] = useState('')
  const [monthlyPayment, setMonthlyPayment] = useState('')

  //Functions
  const calculateLoanAmount = () => {
    setLoanAmount(homeValue - downPayment)
    return loanAmount
  }

  const calculateMonthlyPayment = () => {
    let percentToDecimal = interestRate / 12 / 100
    let yearsToMonth = loanDuration * 12
    setMonthlyPayment((percentToDecimal * loanAmount) /
      (1 - Math.pow(1 + percentToDecimal, -yearsToMonth)));

    return monthlyPayment
  }

  let alertClass;
  monthlyPayment ? (alertClass = 'alert-success') : (alertClass = 'alert-danger');

  return (
    <div className='container mt-4 card' style={{ width: 500 }}>
      <Title text={'Mortgage Calc App'} />
      <form onSubmit={(e) => {
        e.preventDefault()
        calculateMonthlyPayment()
      }
      }>
        <div className="d-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          <FormGroup
            labelText={'Home value'}
            inputType={'number'}
            placeholder={'Enter the value of the home'}
            values={homeValue}
            onInput={(e) => setHomeValue(e.target.value)}
            onKeyUp={calculateLoanAmount}
          />
          <FormGroup
            labelText={'Down Payment'}
            inputType={'number'}
            placeholder={'Enter your funds'}
            values={downPayment}
            onInput={(e) => setDownPayment(e.target.value)}
            onKeyUp={calculateLoanAmount}
          />
        </div>
        <FormGroup
          labelText={'Loan Amount'}
          inputType={'number'}
          placeholder={'The calculted mount of loan'}
          values={loanAmount}
          readOnly={true}
          className='bg-light'
        />
        <div className="d-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          <FormGroup
            labelText={'Interest Rate %'}
            inputType={'number'}
            placeholder={'Enter your interest rate'}
            values={interestRate}
            onInput={(e) => setInterestRate(e.target.value)}

          />
          <FormGroup
            labelText={'Loan Duration (years)'}
            inputType={'number'}
            placeholder={'Enter your duration in years'}
            values={loanDuration}
            onInput={(e) => setLoanDuration(e.target.value)}

          />
        </div>
        <Button btnClass={'btn-info btn-block'} text={'calculate'} />
        <h4 className={`${alertClass}`} style={{ width: 'auto', margin: '1rem 0' }}>
          {
            !monthlyPayment ? 'Complete all fields' : (`Your monthly paayment is ${monthlyPayment.toFixed(2)}`)
          }
        </h4>
      </form>
    </div>
  )
}

