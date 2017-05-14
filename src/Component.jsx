import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from './components/js/actions/dataActions';

@connect((store) => {
  return {
    data: store.data
  };
})
export default class Component extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    this.props.data ?
      <div>{this.props.data}</div> :
    null;
  };
}
Component.propTypes = {
  onRender: React.PropTypes.func
};
