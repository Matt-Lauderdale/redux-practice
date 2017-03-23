import React from 'react';
require('./components/scss/util/_default');

export default class Component extends React.Component {
  render() {
    if (this.props.onRender) {
      this.props.onRender();
    }

    return (
      <p>Hello world</p>
    );
  }
}

Component.propTypes = {
  onRender: React.PropTypes.func
};
