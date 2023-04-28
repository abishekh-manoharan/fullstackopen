import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("")

  const handleNewNoteSubmit = (e) => {
    e.preventDefault()
    const aNote = {
      id: notes[notes.length-1].id+1,
      content: newNote,
      important: Math.random() < .50,
    }
    setNotes(notes.concat(aNote))
    
  }

  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={handleNewNoteSubmit}>
        <input onChange={handleNoteChange} name="note"/>
        <button type='submit'>Submit</button>  
      </form>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App 
