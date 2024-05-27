import React from 'react';
import './Component.css';

function Component(props) {
  return (
    <div className="Component">
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      {props.list && props.list.length > 0 && ( 
        <ul>
          {props.list.map((item) => ( 
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Component;
