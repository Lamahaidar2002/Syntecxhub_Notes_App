
import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [editingId, setEditingId] = useState(null);

  const titleInputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  function addNote() {
    if (!title.trim() || !content.trim()) {
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
    };

    setNotes([...notes, newNote]);
    setTitle('');
    setContent('');
    titleInputRef.current.focus();
  }

  function deleteNote(id) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this note?'
    );

    if (!confirmed) {
      return;
    }

    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);

    if (editingId === id) {
      cancelEditing();
    }
  }

  function startEditing(note) {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
    titleInputRef.current.focus();
  }

  function cancelEditing() {
    setEditingId(null);
    setTitle('');
    setContent('');
    titleInputRef.current.focus();
  }

  function updateNote() {
    if (!title.trim() || !content.trim()) {
      return;
    }

    const updatedNotes = notes.map((note) =>
      note.id === editingId
        ? { ...note, title: title, content: content }
        : note
    );

    setNotes(updatedNotes);
    setEditingId(null);
    setTitle('');
    setContent('');
    titleInputRef.current.focus();
  }

  return (
    
<div className="noema-app">
  <div className="noema-brand">
    <div className="noema-logo" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M8 11h8M8 15h6" />
      </svg>
    </div>

    <div className="noema-brand-text">
      <span className="noema-brand-name">NOEMA</span>
      <span className="noema-brand-tagline">
        A home for your thoughts.
      </span>
    </div>
  </div>

  <h1>My Notes</h1>

      <p>Capture your ideas, stay organized.</p>

      <div className="note-form">
        <input
          type="text"
          placeholder="Enter note title"
          ref={titleInputRef}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          placeholder="Write your note..."
          rows={4}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <div className="form-actions">
          <button
            type="button"
            onClick={editingId === null ? addNote : updateNote}
          >
            {editingId === null ? 'Add Note' : 'Save Changes'}
          </button>

          {editingId !== null && (
            <button
              type="button"
              className="cancel-button"
              onClick={cancelEditing}
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="notes-section">
        <h2>Your Notes</h2>

        <div className="notes-grid">
          {notes.map((note) => (
            <div key={note.id} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.content}</p>

              <div className="note-actions">
                <button
                  type="button"
                  className="edit-button"
                  onClick={() => startEditing(note)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => deleteNote(note.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
