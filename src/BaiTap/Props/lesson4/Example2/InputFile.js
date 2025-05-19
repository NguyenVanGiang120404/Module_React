import React from 'react';

function InputFile(props) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor={props.id} style={{ display: 'block', marginBottom: '5px' }}>
        {props.lable}:
      </label>
      <input type={props.type} id={props.id} name={props.id} />
    </div>
  );
}

export default InputFile;
