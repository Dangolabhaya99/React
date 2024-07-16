import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [state,SetState] =useState('I am Parent');
    const getdata= (senddata)=>{
        SetState(senddata)
    };

  return (
    <div>
        <p>{state}</p>
      <ChildComponent sendtoparent={getdata} />
    </div>
  )
}

export default ParentComponent
