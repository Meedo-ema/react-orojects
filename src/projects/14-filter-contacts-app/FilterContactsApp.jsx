import { useEffect, useRef, useState } from 'react'
import Title from '../components/Title'
import Contact from './Contact'
import ContactsData from './Data.json'

export default function FilterContactsApp() {
  let inputSearch = useRef(null)
  useEffect(() => {
    inputSearch.current.focus()
  }, [])

  const [searchContact, setSearchContact] = useState('')

  return (
    <div className='text-center'>
      <Title text={'Filter Contacts App'} />
      <input type="text"
        placeholder='search by first name'
        className='mb-2'
        style={{ padding: '.3rem .5rem' }}
        ref={inputSearch}
        value={searchContact}
        onChange={(e) => setSearchContact(e.target.value)}
      />
      <section className='d-flex' style={{
        gap: 15,
        maxWidth: "1600px",
        margin: 'auto',
        flexWrap: 'wrap',
      }}>
        {ContactsData.filter((contact) => {
          if (searchContact === '') {
            return contact
          } else if (contact.first_name.toLowerCase().includes(searchContact.toLowerCase().trim())) {
            return contact
          }
        }).map((contact) => {
          return (
            <Contact contact={contact} textColor={'text-dark'} />
          )
        })}
      </section>

    </div>
  )
}

