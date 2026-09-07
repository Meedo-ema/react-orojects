import { NoteStyle, Icons, DeleteIcon } from "./NoteStyle"
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md'
import { useEffect, useState } from "react";

export default function NewNote({ note, deleteNote, text, randomBg }) {
  const [newCardBg, setNewCardBg] = useState()
  useEffect(() => {
    !newCardBg && setNewCardBg(randomBg)
  }, [newCardBg])

  return (
    <NoteStyle className={`card ${newCardBg}`}>
      <div className="card-header text-right">
        <Icons>
          <MdOutlineNoteAlt />
          <DeleteIcon>
            <MdDeleteForever onClick={() => deleteNote(note.id)} />
          </DeleteIcon>
        </Icons>
      </div>
      <div className="card-body">
        <textarea style={{
          border: 'none',
          outline: 'none',
        }}>{text}</textarea>
      </div>
    </NoteStyle>
  )
}

