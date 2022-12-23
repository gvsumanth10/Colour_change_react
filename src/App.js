import './App.css';
import React, { useState } from 'react';
import Select from 'react-select';

function App() {
  var colors = [
    {
      value: 1,
      label: "Lime"
    },
    {
      value: 2,
      label: 'Lavender'
    },
    {
      value: 3,
      label: 'Crimson'
    },
    {
      label: 'Darkblue',
      value: 4
    },
    {
      label: 'Teal',
      value: 5
    },
    {
      label: 'GhostWhite',
      value: 6
    },
    {
      value: 7,
      label: 'AquaMarine'
    },
    {
      value: 8,
      label: "AliceBlue"
    }
  ];

  const [input, setinput] = useState(colors.label)
  function changeHandle(e) {
    setinput(e.label)
    console.log(e.label)
  }
  return (
    <div className="dropdownbar">
      <Select options={colors} onChange={changeHandle} className="option"></Select>
      <center>
        <button style={{ backgroundColor: `${input}` }}></button>
      </center>
    </div>
  );
}

export default App;
