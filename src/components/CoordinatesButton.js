import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    console.log("hello")
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
    // this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coords</button>
    );
  }
}

export default CoordinatesButton
