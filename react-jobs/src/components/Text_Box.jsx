import React, { useState } from 'react';

function Text_Box() {
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = () => {
        if (text.trim() !== '') {
            const currentTime = new Date().toLocaleString();
            const newMessage = {
                text: text,
                timestamp: currentTime
            };
            setMessages(prevMessages => [...prevMessages, newMessage]);
            setText('');
        }
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
            <div className="absolute top-0 left-0 w-full bg-white text-center py-2 px-3">
                {messages.map((message, index) => (
                    <div key={index} style={{textAlign: 'right'}}>
                        <p>{message.text}</p>
                        <p style={{ fontSize: 'smaller', color: 'gray' }}>{message.timestamp}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Text_Box;
