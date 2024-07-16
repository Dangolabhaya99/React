import React from 'react'

const ChildComponent = ({sendtoparent}) => {
    const setdata=()=>{
        const senddata='Hello from child';
        sendtoparent(senddata);
    }
  return (
    <div>
      <button onClick={setdata}>Click ME</button>
    </div>
  )
}

export default ChildComponent
