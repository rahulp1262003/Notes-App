import React, { useState } from 'react';
import Note from './Note';
import Add from './Add';

function App() {
    const [notes, setNotes] = useState([]);

    const handleFormSubmit = (formData) => {
        setNotes([...notes, formData]);
    };

    const handleDeleteNote = (index) => {
        setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
    };

    const handleEditNote = (index, updatedNote) => {
        setNotes((prevNotes) => prevNotes.map((note, i) => (i === index ? updatedNote : note)));
    };

    return (
        <div className='flex justify-center items-center flex-wrap pt-8'>
            <Add onFormSubmit={handleFormSubmit} />
            <div className="notes-container flex justify-center items-center flex-wrap">
                {notes.map((note, index) => (
                    <Note
                        key={index}
                        formData={note}
                        onDelete={() => handleDeleteNote(index)}
                        onEdit={(updatedNote) => handleEditNote(index, updatedNote)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
