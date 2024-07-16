import React from 'react'

const GreetComponent = (props) => {
    // console.log(props);
    const styles = {
        div:{
            backgroundColor: 'lightblue',
            color:'red',
            padding: '10px',
            margin: '20px',
            borderRadius: '5px',
            boxShadow: '0 0 5px 1px lightblue'
        }
    }
  return (
    <div style={styles.div}>
      <h1>GreetComponent</h1>
      <p>Hello, {props.name} {props.caste}! we are learning props in component</p>
    </div>
  )
}

export default GreetComponent;
