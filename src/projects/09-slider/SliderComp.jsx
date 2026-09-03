export default function SliderComp({setValue, handleInput, bgColor, textColor}) {
  return (
    <div className="container d-flex flex-column" style={{ gap: 100 }}>
      <input type="range" min="0" max="100" value={setValue} onInput={handleInput} />
      <div style={{
        color: !textColor ? 'black' : textColor,
        background: !bgColor ? 'lightgray' : bgColor,
        height: `${setValue * 3}px`,
        width: `${setValue * 3}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%'
      }}>
        <span>{setValue}</span>
      </div>
    </div>
  )
}

