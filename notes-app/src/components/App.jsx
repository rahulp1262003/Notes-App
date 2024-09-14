import React, { useState, useEffect } from 'react';
import Note from './Note';
import Add from './Add';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs

function App() {
    const [notes, setNotes] = useState([]);

    // Load notes from localStorage when the component mounts
    useEffect(() => {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes)); // Parse the saved JSON string back into a JavaScript object
        }
    }, []);

    // Save notes to localStorage when notes state changes
    useEffect(() => {
        if (notes.length > 0) {
            localStorage.setItem('notes', JSON.stringify(notes)); // Convert notes array to a JSON string
        }else{
            localStorage.removeItem('notes');
        }
    }, [notes]);

    const handleFormSubmit = (formData) => {
        // Assign a unique ID to each new note
        const newNote = { ...formData, id: uuidv4() };
        setNotes([...notes, newNote]);
    };

    const handleDeleteNote = (id) => {
        setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
    };

    const handleEditNote = (id, updatedNote) => {
        setNotes((prevNotes) => prevNotes.map(note => (note.id === id ? updatedNote : note)));
    };

    return (
        <div className='flex justify-center items-center flex-wrap pt-8'>
            <Add onFormSubmit={handleFormSubmit} />
            <div className="notes-container flex justify-center items-center flex-wrap">
                {notes.map((note) => (
                    <Note
                        key={note.id} // Use note.id as the unique key
                        formData={note}
                        onDelete={() => handleDeleteNote(note.id)}
                        onEdit={(updatedNote) => handleEditNote(note.id, updatedNote)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
