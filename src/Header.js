import React from "react";

export default function Header({ searchText, addNote, onSearch }) {
  const callSearch = (e) => {
    onSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new" onClick={addNote}>
          + New Note
        </button>
        <input
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={searchText}
          onChange={callSearch}
        />
      </aside>
    </header>
  );
}
