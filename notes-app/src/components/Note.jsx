import React, { useState } from 'react';
import Buttons from './Buttons';

function Note({ formData, onDelete, onEdit }) {

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedData, setEditedData] = useState(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  }

  const handleSave = () => {
    onEdit(editedData);
    setIsEditMode(false);
  }

  const handleCancel = () => {
    setEditedData(formData);
    setIsEditMode(false);
  }

  return (
    <div className='w-[15rem] h-[15.6rem] bg-white rounded-[2.5rem] m-8 cursor-pointer flex justify-between items-center flex-col relative'>
      {/* Heading of Note */}
      <div className="w-full h-[24%] bg-blue-400 flex justify-center items-center p-3 rounded-t-[2rem]">
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
            rows="5"
            value={editedData.details}
            onChange={handleInputChange}
            className='text-base md:text-lg lg:text-xl text-start break-words w-full rounded-md -z-10 outline-none'
          >
          </textarea>
        ) : (
          <p className='text-base md:text-lg lg:text-xl text-start break-words'>
            {editedData.details.length >= 99 ? `${editedData.details.slice(0, 95)}...` : editedData.details}
          </p>
        )}
        {/* Pass the onDelete prop down */}
        <Buttons
          set={true}
          onDelete={onDelete}
          onEditToggle={() => setIsEditMode(true)}
        />
      </div>
      {isEditMode && (
        <div className="flex justify-center items-center w-[10rem] p-2 absolute -bottom-16 ">
          <button onClick={handleSave} className="bg-green-400 text-white p-2 rounded-md mr-2">
            Save
          </button>
          <button onClick={handleCancel} className="bg-red-400 text-white p-2 rounded-md">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Note;
