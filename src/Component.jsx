import React from 'react';
import fetchEndPoint from './components/js/util/fetchEndPoint';
import { createStore } from 'redux';
require('./components/scss/util/_default');

class Component extends React.Component {
  componentWillMount() {
    console.log('component about to mount');
    const reducer = (initialState = 0, action) => {
      if (action.type === 'INC') {
        return action.payload;
      }
    };

    const store = createStore(reducer, 1);

    store.subscribe(() => {
      console.log('store changed', store.getState());
    });
    const dispatchData = (data)=> {
      store.dispatch({type: 'INC', payload: data});
    };

    fetchEndPoint('/endpoint/promo-model.json', dispatchData);

  }
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

export default Component;
