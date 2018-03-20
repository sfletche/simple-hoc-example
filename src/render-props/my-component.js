import React from 'react';
import Mouse from './mouse';

class MyComponent extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Mouse render={({ x, y }) => (
          // The render prop gives us the state we need
          // to render whatever we want here.
          <h1>My RP says mouse position is ({x}, {y})</h1>
        )}/>
      </div>
    )
  }
}

export default MyComponent;
