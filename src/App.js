import React from "react";
import Header from "./Header";
import NoteList from "./NoteList";
import { useEffect } from "react"

const App = () => {
  const [notes, setNotes] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

   useEffect(() => {
    // Load notes from local storage when the component mounts
    const updatedNotes = JSON.parse(localStorage.getItem("notes"));
    if (updatedNotes) {
      setNotes(updatedNotes);
      console.log(updatedNotes);
    }
  }, []);

  useEffect(() => {
    // Save notes to local storage whenever the notes state changes
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    setNotes([newNote, ...notes]);
    //console.log(notes);
  };

  const onType = (editMeId, updatedKey, updatedValue) => {
    const updatedNotes = notes.map((note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    setNotes(updatedNotes);
  };

  const onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedNotes = notes.map((note) => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const hasMatch =
          note.title.toLowerCase().includes(newSearchText.toLowerCase()) ||
          note.description.toLowerCase().includes(newSearchText.toLowerCase());
        note.doesMatchSearch = hasMatch;
        return note;
      }
    });
    setNotes(updatedNotes);
    setSearchText(newSearchText);
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  //const filterContent = notes.filter((note) => note.doesMatchSearch);

  return (
    <div>
      <Header searchText={searchText} addNote={addNote} onSearch={onSearch} />
      <NoteList notes={notes} onType={onType} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
