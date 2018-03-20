export const withMouse = (Component) => {
  return class extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

    render() {
      return (
        <div onMouseMove={(event) => this.handleMouseMove(event)}>
          <Component {...this.props} mouse={this.state}/>
        </div>
      );
    }
  }
}
