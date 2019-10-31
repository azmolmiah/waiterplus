import { GET_INFOS, SET_LOADING, INFOS_ERROR } from './types';

// Get infos
export const getInfos = () => async dispatch => {
  const date = new Date();
  const threeHours = 60 * 60 * 1000 * 3;
  const initTime = JSON.parse(localStorage.getItem('initTime'));
  const timeNow = date.getTime();
  const diff = timeNow - initTime;

  try {
    setLoading();
    // Check if local storage is empty or 3 hours old/older
    if (localStorage.getItem('infos') === null || diff >= threeHours) {
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
      localStorage.setItem('initTime', JSON.parse(date.getTime()));
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
