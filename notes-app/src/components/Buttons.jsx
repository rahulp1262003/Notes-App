import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

function Buttons({ set, onDelete, onEditToggle, randomColor }) {
    return (
        <div>
            <button
                type="button"
                onClick={onEditToggle}
                style={{ backgroundColor: randomColor }} // Apply random light color to the edit button
                className={`${set ? 'w-auto' : 'w-[5rem]'} absolute bottom-2 right-2 hover:bg-opacity-75 p-3 rounded-full m-1 transition-colors duration-300`}
            >
                <FiEdit2 size='20px' />
            </button>
            <button
                type="button"
                onClick={onDelete}
                className={`${set ? 'w-auto' : 'w-[5rem]'} absolute bottom-2 left-2 bg-red-500 hover:bg-red-400 p-3 rounded-full m-1 transition-colors duration-300`}
            >
                {set ? <AiOutlineDelete size='20px' color='white' /> : 'Add'}
            </button>
        </div>
    );
}

export default Buttons;
