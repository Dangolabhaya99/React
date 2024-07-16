import React, { useState } from 'react';
import "./counter.css";

const CounterFunction = () => {

    const [count, setCount] = useState(0);

    const increment= ()=>{
        setCount(count+1);
    }
    const decrement= ()=>{
        setCount(count-1);
    }
    
    const styles={
        counter:{
            border: '2px solid red',
        }
    }

    return (
        <>
            <div id="counter" stlye={styles.counter}>
                <h1 style={{color:'red'}}>Counter Function</h1>
                <h2>Count: {count}</h2>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
            </div>
        </>
    )
}

export default CounterFunction
