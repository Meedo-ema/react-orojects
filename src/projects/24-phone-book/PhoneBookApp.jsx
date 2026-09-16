import { useState } from 'react'
import Title from '../components/Title'
import ContactList from './ContactList'

//Data Base (db)
import { getContacts } from './db'
import SearchFilter from './SearchFilter'

export default function PhoneBookApp() {
  let dbContacts = getContacts()
  const [showContacts, setShowContacts] = useState(false)
  const [sortAZ, setSortAZ] = useState()
  const [searchContact, setSearchContact] = useState("")

  const toggleContacts = () => {
    !showContacts ? setShowContacts(true) : setShowContacts(false)
  }

  const toggleSortAZ = () => {
    sortAZ ? setSortAZ(false) : setSortAZ(true)
  }

  return (
    <>
      <Title text={'Phone book'} />
      <main className="bg-dark p-1 text-light">
        <SearchFilter
          handleToggleContacts={toggleContacts}
          handleToggleSortAZ={toggleSortAZ}
          handleSearchContact={setSearchContact}
        />
        <div style={{ height: 650, overflow: 'auto' }}>
          <h2 className="subtitle text-center">Display contacts</h2>
          {showContacts && <ContactList
            contacts={
              (sortAZ ?
                dbContacts.sort((a, b) => a.firstName.localeCompare(b.firstName))
                : dbContacts.sort((a, b) => b.firstName.localeCompare(a.firstName))).filter((contact) => {
                  if (searchContact === "") {
                    return contact
                  } else if (contact.firstName.toLocaleLowerCase().includes(searchContact.toLowerCase())) {
                    return contact
                  }

                })

            } />}
        </div>
      </main>
    </>
  )
}

