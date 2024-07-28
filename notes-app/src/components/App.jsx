import React,{useState} from 'react'
import Add from './Add'
import Note from './Note'

function App() {

    const initialFormData = {
        title: '',
        details: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleFormSubmit = (data) => {
        console.log('Form Data:', data);
        setFormData(data);
    };

    return (
        <div className='inline-block'>
            <div className='w-full flex flex-row items-center justify-center flex-wrap '>
                <div className='inline-block'>
                    <Add onFormSubmit={handleFormSubmit} />
                </div>
                <Note formData={formData} />
            </div>
        </div>
    )
}

export default App