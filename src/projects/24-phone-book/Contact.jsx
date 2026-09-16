import { styled } from "styled-components"
import { FaUserAlt, FaPhone } from 'react-icons/fa'

const ContactStyle = styled.li`
display: grid;
grid-template-columns: repeat(4, 1fr);
align-items: center;
max-width: 700px;
margin: auto;
padding: .2rem .4rem;
border-bottom: 1px solid #666;
  &:hover{
    cursor: pointer;
    background-color: #666;
  }
  img{
    height: 50px;
    border-radius: 50%;
  }
`;

export default function Contact({ icon, firstName, lastName, phoneNr }) {
  return (
    <ContactStyle>
      <div>
        {!icon ? <FaUserAlt className='text-info' /> : <img src={icon} />}
      </div>
      <div>{!firstName ? 'Mohamed' : firstName}</div>
      <div>{!lastName ? 'Emad' : lastName}</div>
      {!phoneNr ? '000-000'
        :
        (<a className='text-info' href={`tel:${phoneNr}`}>
          {phoneNr}
          <FaPhone className='text-success ml-1' />
        </a>)}


    </ContactStyle>
  )
}

