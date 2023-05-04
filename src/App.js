import { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [filter, setFilter] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])

  useEffect(()=>{
    console.log('notes changed')
  }, [notes])

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
