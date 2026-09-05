export const ProgressBar = ({ bgColor, completed }) => {
  const containerStyle = {
    height: 25,
    width: '100%',
    borderRadius: 50,
    margin: 50,
    background: '#e0e0de',
  }
  const fillerStyle = {
    background: bgColor,
    height: '100%',
    width: `${completed}%`,
    borderRadius: 'inherit',
    transition: 'width 1s ease-in-out',
    textAlign: 'right'
  }
  const labelStyles = {
    padding: 15,
    margin: 10,
    color: '#fff',
    fontWeight: 'bold',
  }
  return (
    <div style={containerStyle}>
      <div style={fillerStyle}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  )
}

