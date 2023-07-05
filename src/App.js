import React, { useState } from "react";
import './App.css';
import Heading from './heading';
import Footer from './footer';
import Note from './note';
// import notes from './notes';
import CreateArea from './CreateArea';


function App() {
  
  const [notes, setNotes] = useState([]); // state array

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }



  return (
    <div className="App">
      <Heading />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
