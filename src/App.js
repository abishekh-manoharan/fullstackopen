import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("")
  const [filter, setFilter] = useState(true)

  const handleNewNoteSubmit = (e) => {
    e.preventDefault()
    const aNote = {
      id: notes[notes.length-1].id+1,
      content: newNote,
      important: Math.random() < 0.5,
    }
    setNotes(notes.concat(aNote))

  }

  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }

  const notesToShow = filter ?  
    notes.filter(note => note.important):
    notes

  
  const handleFilterClick = () => {
    setFilter(!filter)
  }

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={handleNewNoteSubmit}>
        <input onChange={handleNoteChange} name="note"/>
        <input type='button' onClick={()=>{setFilter(!filter)}} value={filter}/>
        <button type='submit'>Submit</button>  
      </form>
      <ul>
        {
          notesToShow.map(note => 
            <Note key={note.id} note={note} />
          )
        }
      </ul>
    </div>
  )
}

export default App 
