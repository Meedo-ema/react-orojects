
const Contact = ({ contact, width = 300, cardColor = 'card-danger', textColor }) => {
  return (
    <div
      key={contact.id}
      className={`card m-auto bg-light ${cardColor}`}
      style={{ width: width }}>
      <div className="card-header">{contact.first_name}</div>
      <div className="card-body text-left">
        <h4 className="card-text">
          <span className={`fw-bold ${textColor}`}>Last Name: </span>
          {contact.last_name}</h4>
        <p className="card-text">
          <span className={`fw-bold ${textColor}`}>Email: </span>
          {contact.email}
        </p>
        <p className="card-text">
          <span className={`fw-bold ${textColor}`}>Phone: </span>
          {contact.phone}
        </p>
        <p className="card-text">
          <span className={`fw-bold ${textColor}`}>User Name: </span>
          {contact.user_name}
        </p>
      </div>
    </div>
  )
}

export default Contact
