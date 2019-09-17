import React from 'react';

const Speak = props => {

    return (
      <div>
       <button onClick = {props.speak}>SPEAK</button>
       <div>{props.message}</div>
      </div>
    );
    }

export default Speak;
