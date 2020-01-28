import React from 'react';
import {Dropdown} from 'semantic-ui-react'

import ModifiableList from './ModifiableList.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <ModifiableList items={["a", "b"]}
                      getItemInput={(value, onValueChange) => (
                        <Dropdown
                          placeholder='Select currency to add'
                          fluid
                          search
                          selection
                          options={[{key: "a", value: "a", text: "a"}, {key: "b", value: "b", text: "b"}, {
                            key: "c",
                            value: "c",
                            text: "c"
                          }]}
                          value={value}
                          onChange={(event, data) => {
                            onValueChange(data.value);
                          }}
                        />)}
                      onAdd={() => {
                      }}
                      onDelete={() => {
                      }}
                      onClear={() => {
                      }}
      />
    </div>
  );
}

export default App;
