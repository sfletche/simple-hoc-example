import React from 'react';

class MyComponent extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    const { x, y } = this.state;

    return (
      <div onMouseMove={(event) => this.handleMouseMove(event)}>
        <h1>My Component says mouse position is ({x}, {y})</h1>
      </div>
    );
  }
}

export default MyComponent;
