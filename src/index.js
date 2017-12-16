import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

let onReceiveCoordinates = (arr) => {
  console.log(arr);
  return arr;
};

let onDelayedClick = () => {
  console.log("delayed Click!")
};

ReactDOM.render(
  <div>
    <CoordinatesButton
    onReceiveCoordinates = {onReceiveCoordinates}
    />
    <DelayedButton
    onDelayedClick ={onDelayedClick}
    delay={5000}
    />
  </div>,
  document.getElementById('global')
);
