import React from 'react';
import PropTypes from 'prop-types';

// Instead of using a HOC, we can share code using a
// regular component with a render prop!
class Mouse extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div onMouseMove={(event) => this.handleMouseMove(event)}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

Mouse.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Mouse;
