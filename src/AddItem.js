import React, {useState} from 'react';
import {Button, Icon} from "semantic-ui-react";

const AddItem = ({getInput, onAdd}) => {
  const [addedValue, setAddedValue] = useState("");
  return (
    <div>
      {getInput(addedValue, setAddedValue)}
      <Button icon onClick={() => {
        onAdd(addedValue);
      }}>
        <Icon name='add'/>
      </Button>
    </div>
  );
};

AddItem.propTypes = {};

export default AddItem;