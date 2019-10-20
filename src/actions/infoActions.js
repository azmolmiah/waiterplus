import { GET_INFOS, SET_LOADING, INFOS_ERROR } from './types';
import moment from 'moment';

// Get infos
export const getInfos = () => async dispatch => {
  try {
    setLoading();

    let a = moment(JSON.parse(localStorage.getItem('time')));
    const diff = a.fromNow(true);

    if (localStorage.getItem('infos') === null || diff === '3 hours') {
      const res = await fetch(
        'https://waiterplus.uk/api/c/1.57.4/public/api/v2/fr/get_outlet_details',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            outlet: 'modhubon'
          }
        }
      );
      const data = await res.json();

      // Save time and data for local storage as well to use for the next three hours
      localStorage.setItem('infos', JSON.stringify(data));
      localStorage.setItem('time', JSON.stringify(moment()));

      dispatch({
        type: GET_INFOS,
        payload: data
      });
    } else {
      dispatch({
        type: GET_INFOS,
        payload: JSON.parse(localStorage.getItem('infos'))
      });
    }
  } catch (err) {
    dispatch({
      types: INFOS_ERROR,
      payload: err.response.data
    });
  }
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
