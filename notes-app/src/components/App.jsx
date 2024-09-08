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

    return (
        <div className='flex justify-center items-center flex-wrap '>
            <Add onFormSubmit={handleFormSubmit} />
            <div className="notes-container flex justify-center items-center flex-wrap">
                {notes.map((note, index) => (
                    <Note
                        key={index}
                        formData={note}
                        onDelete={() => handleDeleteNote(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
