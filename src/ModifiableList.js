import React from 'react';

import AddItem from './AddItem.js';

import './ModifiableList.css';

const ModifiableList = ({items, getItemInput, onAdd, onDelete, onClear, className = ""}) => {
  return (
    <div className={`ModifiableList ${className}`}>
      <div className="controls">
        <AddItem className="addContainer" getInput={getItemInput} onAdd={onAdd}/>
        <button className="clearButton" onClick={onClear}>
          Remove all
        </button>
      </div>
      <ul className="list">
        {items.map(item => (
          <li className="item">
            <div className="itemText">{item}</div>
            <button className="removeButton" onClick={() => {
              onDelete(item);
            }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ModifiableList.propTypes = {};

export default ModifiableList;