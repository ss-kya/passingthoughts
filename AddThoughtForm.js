import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    // prevent page refresh when form submits
    event.preventDefault();
    
    // creates new thought object
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    }

    if (text.length > 0) {
    // pass thought object to addThought()
    props.addThought(thought);
    // clears user input when form submits
    setText('');
    }
  }

  return (
    <form 
    className="AddThoughtForm"
    onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}