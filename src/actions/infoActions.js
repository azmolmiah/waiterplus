import { GET_INFOS, SET_LOADING, INFOS_ERROR } from './types';

// Get infos
export const getInfos = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      'https://waiterplus.uk/api/c/1.57.4/public/api/v2/fr/get_outlet_details',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'outlet': 'modhubon'
        }
      }
    );
    const data = await res.json();

    dispatch({
      type: GET_INFOS,
      payload: data
    });
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
