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

    const handleKeyPress = (event) => {
        // Check if the pressed key is Enter (key code 13)
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className='flex items-end justify-end h-full w-full px-2 fixed sticky'>
            <div className="flex w-2/3 fixed bottom-16"> 
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter text here"
                    className="flex w-full mr-2 h-20 mb-2 ml px-1"
                />
                <button onClick={handleSubmit} className="px-8 py-1 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 h-20">
                    Send
                </button>
            </div>
            {messages.length > 0 && (
                <div className="absolute top-0 left-0 w-full bg-white text-center py-2 px-3">
                    {messages.map((message, index) => (
                        <div key={index} style={{textAlign: 'right'}}>
                            <p>{message.text}</p>
                            <p style={{ fontSize: 'smaller', color: 'gray' }}>{message.timestamp}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Text_Box;
