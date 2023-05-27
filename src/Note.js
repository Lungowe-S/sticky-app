import React from "react";

export default function Note({ note, onType, deleteNote }) {
  const updatedTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = note.id;
    onType(editMeId, "title", updatedValue);
    //console.log(editMeId);
  };

  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = note.id;
    onType(editMeId, "description", updatedValue);
  };

  const deletingNote = () => deleteNote(note.id);
  console.log(note.id);

  return (
    <li className="note">
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={updatedTitle}
      />
      <textarea
        className="note__description"
        placeholder="Description..."
        value={note.description}
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={deletingNote}>
        X
      </span>
    </li>
  );
}
