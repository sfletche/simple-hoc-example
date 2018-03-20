import React from 'react';
import { withMouse } from './with-mouse';

class MyComponent extends React.Component {
  render() {
    // Instead of maintaining our own state,
    // we get the mouse position as a prop
    const { x, y } = this.props.mouse;

    return (
      <div>
        <h1>My HoC says mouse position is ({x}, {y})</h1>
      </div>
    );
  }
}

// Just wrap your component in withMouse and it'll get the mouse prop
export default withMouse(MyComponent)
