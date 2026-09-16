import Contact from "./Contact";
export default function ContactList({ contacts }) {
  const getRandomImg = () => {
    const types = [
      "adventurer", "adventurer-neutral", "avataaars", "avataaars-neutral", "big-ears", "big-smile", "blobs", "bottts", "cameo", "clay", "constellation", "critters", "croodles", "identicon", "initial-face", "line-face", "loops", "lorelei", "waves", "weave"]

    return types[Math.floor(Math.random() * types.length)]
  }
  return (
    <ul>
      {contacts.map((contact, id) => {
        return (
          <Contact
            key={id}
            icon={`https://api.dicebear.com/10.x/${getRandomImg()}/svg?seed=Mohamed`}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phoneNr={contact.phone} />
        )
      })}
    </ul>
  )
}

