
const FormGroup = ({ labelText, inputType, placeholder, values, onInput,
  onKeyUp, onChange, className, readOnly = false, ref }) => {
  return (
    <div className="form-group">
      <label>{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        value={values}
        onInput={onInput}
        onKeyUp={onKeyUp}
        onChange={onChange}
        className={className}
        readOnly={readOnly}
        ref={ref}
      />
    </div>
  )
}

export default FormGroup
