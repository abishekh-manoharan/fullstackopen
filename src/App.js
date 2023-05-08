import { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [filter, setFilter] = useState(false)

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
      //id: notes[notes.length-1].id+1,
      content: newNote,
      important: Math.random() < 0.5,
    }

    axios
      .post('http://localhost:3001/notes', aNote)
      .then((res)=>{
        console.log(res);
        setNotes(notes.concat(aNote))
        setNewNote('')
      })

  }

  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`);

    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find((e)=>e.id===id)
    const updatedNote = {...note, important:!note.important}

    axios 
      .put(url, updatedNote)
      .then((res)=>{
        setNotes(notes.map((n)=>n.id === id ? updatedNote : n))
        console.log(res);
      })
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
            <Note key={note.id} note={note} toggleImportance={()=>{toggleImportanceOf(note.id)}}/>
          )
        }
      </ul>
    </div>
  )
}

export default App 
