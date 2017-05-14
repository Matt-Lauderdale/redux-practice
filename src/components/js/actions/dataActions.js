import axios from 'axios';

export function fetchData() {
  return function (dispatch) {
    axios.get('/endpoint/promo-model.json')
      .then((response) => {
        dispatch({type: 'FETCH_DATA_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_DATA_REJECTED', payload: err});
      });
  };
}

