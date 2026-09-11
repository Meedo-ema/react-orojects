import { useEffect, useRef, useState } from 'react'
import FormGroup from '../components/FormGroup'
import CompoundInterestRateCalc from '../components/CompoundInterestRateCalc'
const CompoundIntersetApp = () => {
  const [compound, setCompound] = useState({
    princibleAmount: "",
    monthlyContribution: null,
    interestAmount: "",
    years: "",
  })
  let inputFocus = useRef(null)
  useEffect(() => {
    inputFocus.current.focus()
  }, [])
document.body.style.background =  "#2174af"
  return (
    <div className='container'>
      <div className="card card-primary bg-warning shadow-md text-dark m-auto mt-4" style={{ maxWidth: 300 }}>
        <div className="card-body">
          <FormGroup
            labelText={'Princible amount $'}
            inputType={'number'}
            value={compound.princibleAmount}
            onChange={(e) => setCompound({ ...compound, princibleAmount: e.target.value })}
            ref={inputFocus}
          />
          <FormGroup
            labelText={'Monthly contribution $'}
            inputType={'number'}
            value={compound.monthlyContribution}
            onChange={(e) => setCompound({ ...compound, monthlyContribution: e.target.value })}
          />
          <FormGroup
            labelText={'Interest amount %'}
            inputType={'number'}
            value={compound.interestAmount}
            onChange={(e) => setCompound({ ...compound, interestAmount: e.target.value })}
          />
          <FormGroup
            labelText={'Year of investment'}
            inputType={'number'}
            value={compound.years}
            onChange={(e) => setCompound({ ...compound, years: e.target.value })}
          />

        </div>
        <div className="card-footer text-right fs-lg">
          <CompoundInterestRateCalc
            princibleAmount={compound.princibleAmount}
            interestRate={compound.interestAmount}
            years={compound.years}
            monthlyContribution={compound.monthlyContribution} />
        </div>
      </div>

    </div>
  )
}

export default CompoundIntersetApp
