import React from 'react';

import AddItem from './AddItem.js';
import {Button, Icon, List} from "semantic-ui-react";

const ModifiableList = ({items, getItemInput, onAdd, onDelete, onClear}) => {
  return (
    <List>
      <List.Header>
        <AddItem getInput={getItemInput} onAdd={onAdd}/>
      </List.Header>
      <List.Header>
        <Button icon onClick={onClear}>
          <Icon name='remove circle'/>
        </Button>
      </List.Header>
      {items.map(item => (
        <List.Item>
          <Button icon onClick={() => {
            onDelete(item.key);
          }}>
            <Icon name='remove'/>
          </Button>
          <List.Content>{item.value}</List.Content>
        </List.Item>
      ))}
    </List>
  );
};

ModifiableList.propTypes = {};

export default ModifiableList;