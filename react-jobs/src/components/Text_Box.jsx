import React, { useState } from 'react';

function Text_Box() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Submitted:', text);
    };

    return (
        <div className='flex items-end justify-end h-full w-full px-2 fixed sticky'>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Enter text here"
                className="w-full mr-2"
            />
            <button onClick={handleSubmit} className="px-2 py-1 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                Submit
            </button>
        </div>
    );
}

export default Text_Box;
