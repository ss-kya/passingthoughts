import React, {useEffect} from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    
    const timeout = setTimeout(() => {
      removeThought(thought.id)
    }, timeRemaining)

    // clears timeout when its done
    return () => {clearTimeout(timeout)}
  }, [thought])
  // thought as dependency array, reruns effect each time thought changes valuee

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
