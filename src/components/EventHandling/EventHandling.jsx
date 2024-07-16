import React from 'react'

const EventHandling = ({onButtonClick}) => {
    
  return (
    <div>
        <h1>Event Handling</h1>
      <button onClick={onButtonClick} className="bg-black text-white px-5 py-2 text-center">Click.. </button>
    </div>
  )
}

export default EventHandling;
