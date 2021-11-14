<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Note from "./components/Note.js";
import noteService from "./services/notes.js";

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
    })
  }, [] )
      
    const addNote = (event) => {
      event.preventDefault()
      const noteObject = {
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() > 0.5,
        id: notes.length + 1,
      }

      noteService
        .create(noteObject)
        .then(returnedNote => {
          setNotes(notes.concat(returnedNote))
          setNewNote('')
      })
    }

    const toggleImportanceOf = (id) => {
      const note = notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important}
 
      noteService
        .update(id, changedNote)
        .then(returnedNote => {
           setNotes(notes.map(note => note.id !== id ? note: returnedNote))
        })
        .catch( error => {
          alert(
            `the message ${note.content} was already deleted from the server`
          )

          setNotes(notes.filter(n => n.id !== id))

        })
    }  

    const handleNoteChange = (event) => {
      setNewNote(event.target.value)
    }
    
    const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

    return (
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all' }
          </button>
        </div>   
        <ul>
          {notesToShow.map((note,i) => 
              <Note 
              key={i} 
              note={note} 
              toggleImportance={() => {toggleImportanceOf(note.id)}}
              />
          )}
        </ul>
        <form onSubmit={addNote}>
          <input
            value={newNote}
            onChange={handleNoteChange}
          />
          <button type="submit">save</button>
        </form>  
      </div>
    )
  }
  

=======
import React, { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>{props.text} {props.feedbackNumber}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={ props.feedback }> {props.text} </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = (type) => {
    return () => {
      if (type === 'good') {
        setGood(good + 1);
      } else if (type === 'neutral') {
        setNeutral(neutral + 1);
      } else if (type === 'bad') {
        setBad(bad + 1);
      } else {
        console.log(type)
      }
    }
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button feedback={feedback('good')} text={'good'} />
      <Button feedback={feedback('neutral')} text={'neutral'} />
      <Button feedback={feedback('bad')} text={'bad'} />

      <h1>Statistics</h1>
      <Statistics text="good"  feedbackNumber={good} />
      <Statistics text="neutral"  feedbackNumber={neutral} />
      <Statistics text="bad"  feedbackNumber={bad} />

    </div>
  )
}
>>>>>>> 171b13718008038c4985f8565e1aeb29255ab148

export default App