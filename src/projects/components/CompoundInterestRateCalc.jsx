export default function CompoundInterestRateCalc({ princibleAmount, interestRate, years, monthlyContribution }) {
  const A = {
    P: princibleAmount,
    r: interestRate / 100,
    n: 12,
    t: years,
    PMT: monthlyContribution,
  }
  return (
    <div>
      $ {(A.P * Math.pow(1 + A.r / A.n, A.n * A.t)).toFixed(2)}
    </div>
  )
}

