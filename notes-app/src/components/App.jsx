import React, { useState } from 'react'
import Add from './Add.jsx'
import Note from './Note.jsx'

function App() {

    const [formEntries, setFormEntries] = useState([]);

    const handleFormSubmit = (newEntry) => {
        console.log('New Entry : ', newEntry);
        setFormEntries([...formEntries, newEntry]);
        console.log('Form Entry', formEntries);
    }

    return (
            <div className='w-full flex items-center justify-start flex-wrap'>
                <div className='w-full flex justify-center items-center flex-row flex-wrap'>
                    <Add onFormSubmit={handleFormSubmit} />
                    {formEntries.map((entry, index) => <Note key={index} formData={entry} />
                    )}
                </div>
            </div>
    )
}

export default App