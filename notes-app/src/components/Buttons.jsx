import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";

function Buttons({ set, onDelete, onEditToggle }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsMenuVisible((prev) => !prev);
    };

    // Function to handle menu item click
    const handleMenuItemClick = (action) => {
        if (action === 'delete' && onDelete) {
            onDelete(); // Call the onDelete function passed from parent
        }
        if (action == 'edit' && onEditToggle) {
            onEditToggle();
        }

        setIsMenuVisible(false); // Hide menu after clicking an option
    };

    return (
        <div>
            <button
                type="button"
                onClick={toggleMenu}
                className={`${set ? 'w-auto' : 'w-[5rem]'} absolute bottom-0 right-0 bg-blue-400 p-3 rounded-tl-[1.5rem] rounded-br-[2rem]`}
            >
                {/* render buttton based on condition */}
                {set ? <BsThreeDots /> : 'Add'}

                {/* Dropdown menu redered based on condition */}
                {isMenuVisible && (
                    <div className='w-[6rem] bg-white rounded-lg shadow-xl absolute top-[30px] -right-20 z-20'>
                        <ul className="text-start pt-3 pb-3">
                            <li
                                onClick={() => handleMenuItemClick('delete')}
                                className='hover:text-red-600 hover:bg-red-200 p-2 px-5'
                            >
                                Delete
                            </li>
                            <li
                                onClick={() => handleMenuItemClick('edit')}
                                className='hover:text-blue-600 hover:bg-blue-200 p-2 px-5'
                            >
                                Edit
                            </li>
                        </ul>
                    </div>
                )}
            </button>
        </div>
    );
}

export default Buttons;
