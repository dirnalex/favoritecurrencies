import React, {useState} from 'react';

import './AddItem.css';

const AddItem = ({getInput, onAdd, className = ""}) => {
  const [valueToAdd, setValueToAdd] = useState("");
  return (
    <div className={`AddItem ${className}`}>
      {getInput(valueToAdd, setValueToAdd)}
      <button className="addButton" onClick={() => {
        onAdd(valueToAdd);
      }}>
        Add
      </button>
    </div>
  );
};

AddItem.propTypes = {};

export default AddItem;