import React, {useState} from 'react';
import {Dropdown} from 'semantic-ui-react'

import ModifiableList from './ModifiableList.js';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const [items, setItems] = useState(["a"]);
  const [options, setOptions] = useState(["a", "b", "c"]);

  const preparedOptions = options
    .filter(option => !items.includes(option))
    .map(option => ({key: option, value: option, text: option}));

  return (
    <div className="App">
      <ModifiableList items={items}
                      getItemInput={(value, onValueChange) => (
                        <Dropdown
                          placeholder='Select currency to add'
                          search
                          selection
                          options={preparedOptions}
                          value={value}
                          onChange={(event, data) => {
                            onValueChange(data.value);
                          }}
                        />)}
                      onAdd={(addedValue) => {
                        if (addedValue && !items.includes(addedValue)) {
                          setItems(items.concat(addedValue));
                        }
                      }}
                      onDelete={(valueToDelete) => {
                        if (items.includes(valueToDelete)) {
                          setItems(items.filter(item => item !== valueToDelete));
                        }
                      }}
                      onClear={() => {
                        setItems([]);
                      }}
      />
    </div>
  );
}

export default App;
