import React from 'react'
import Add from './Add'
import Note from './Note'

function App() {

    return (
        <div className='inline-block'>
            <div className='w-full flex flex-row items-center justify-center flex-wrap '>
            <div className='inline-block'><Add /></div>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
        </div>
    )
}

export default App