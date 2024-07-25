import React from 'react'
import Add from './Add'
import Note from './Note'

function App() {

    return (
        <div>
            <div className='relative'><Add /></div>
            <div className='w-full flex flex-row items-center justify-center flex-wrap absolute'>
                <Note />
            </div>
        </div>
    )
}

export default App