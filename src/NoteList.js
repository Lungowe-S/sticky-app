import React from "react";
import Note from "./Note";

export default function NoteList({ notes, onType, deleteNote }) {
  const filterContent = notes.filter((note) => note.doesMatchSearch);

  return (
    <ul className="notes-list">
      {filterContent.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          description={note.description}
          //filterContent={filterContent}
          onType={onType}
          note={note}
          deleteNote={deleteNote}
        />
      ))}
    </ul>
  );
}
