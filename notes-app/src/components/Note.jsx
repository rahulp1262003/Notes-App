import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import { FaSave } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function getRandomLightColor() {
  // Array of light colors in blue, pink, and purple shades
  const lightColors = [
    '#ADD8E6', // Light Blue
    // '#B6D7EA', // Lighter Blue
    // '#fba3e4', // Light Pink
    '#FFC0CB', // Pink
    // '#E6A6BE', // Light Purple
    '#DDA0DD', // Plum
    '#eb77b5', // Light Mauve
    '#b59df2',
  ];

  // Return a random color from the array
  return lightColors[Math.floor(Math.random() * lightColors.length)];
}

function Note({ formData, onDelete, onEdit }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedData, setEditedData] = useState(formData);
  const [isDeleting, setIsDeleting] = useState(false);
  const [randomColor, setRandomColor] = useState('');

  useEffect(() => {
    // Set a random light color when the component mounts
    setRandomColor(getRandomLightColor());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = () => {
    onEdit(editedData);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setEditedData(formData);
    setIsEditMode(false);
  };

  const handleDeleteClick = () => {
    setIsDeleting(true);
    onDelete();

    // Wait for the animation to complete before calling onDelete
    // setTimeout(() => {
    // }, 300); // Matches the transition duration
  };

  return (
    <div
      className={`note group w-[16rem] h-[19rem] bg-white rounded-[2.5rem] m-3 cursor-pointer flex justify-between items-center flex-col relative hover:shadow-md transition-all duration-300
        `}
    >
      {/* Heading of Note */}
      <div
        className="w-full h-[24%] flex justify-center items-center p-3 rounded-t-[2rem]"
        style={{ backgroundColor: randomColor }} // Apply random light color to the title bar
      >
        {isEditMode ? (
          <input
            type="text"
            name="title"
            value={editedData.title}
            onChange={handleInputChange}
            className='text-black text-[1.4rem] text-center w-full p-[2px] rounded-t-[1.3rem] outline-none bg-transparent'
          />
        ) : (
          <h3 className='text-black text-[1.4rem] inline-block'>
            {editedData.title.length >= 10 ? `${editedData.title.slice(0, 10)}...` : editedData.title}
          </h3>
        )}
      </div>

      {/* Details of Note */}
      <div className='w-full h-[75%] inline-block justify-start items-start flex-wrap p-4 relative'>
        {isEditMode ? (
          <textarea
            name="details"
            rows="7"
            value={editedData.details}
            onChange={handleInputChange}
            className='text-xl text-start break-words w-full rounded-md outline-none'
          ></textarea>
        ) : (
          <p className='text-xl text-start break-words'>
            {editedData.details.length >= 80 ? `${editedData.details.slice(0, 99)}...` : editedData.details}
          </p>
        )}

        {/* Buttons appear only when hovering over the entire note */}
        <div className='absolute bottom-0 left-0 right-0 flex justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <Buttons
            set={true}
            onDelete={handleDeleteClick}
            onEditToggle={() => setIsEditMode(true)}
            randomColor={randomColor} // Pass random light color to buttons
          />
        </div>

        {isEditMode && (
          <div className="flex justify-center items-center p-2 absolute bottom-1 right-[4.4rem]">
            <button onClick={handleSave} className="bg-green-400 text-white p-3 rounded-full mr-2">
              <FaSave size='20px' />
            </button>
            <button onClick={handleCancel} className="bg-red-400 text-white p-3 rounded-full">
              <IoClose size='20px' />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Note;
