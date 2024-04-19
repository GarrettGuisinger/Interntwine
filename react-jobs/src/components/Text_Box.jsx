import React, { useState } from 'react';

function Text_Box() {
  const [text, setText] = useState(''); // State to manage the value of the text box

  // Function to handle changes in the text box
  const handleChange = (event) => {
    setText(event.target.value); // Update the state with the new value entered in the text box
  };

  return (
    <div>
      {/* Input element for the text box */}
      <input
        type="text"
        value={text} // Bind the value of the text box to the state
        onChange={handleChange} // Handle changes in the text box
        placeholder="Enter text here" // Placeholder text
      />
      {/* Display the value of the text box */}
      <p>You entered: {text}</p>
    </div>
  );
}

export default Text_Box;
