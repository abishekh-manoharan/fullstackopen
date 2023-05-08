const Note = ({ note, toggleImportance }) => {
  const important =  note.important ? 'make not important' : 'make important'
  
  return (
    <>
      <li>{note.content}</li>      
      <button onClick={toggleImportance}>{important}</button>
    </>  
  )
}

export default Note