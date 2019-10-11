import { GET_INFOS, SET_LOADING, INFOS_ERROR } from '../actions/types';

const initialState = {
  infos: null,
  loading: false,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INFOS:
      return {
        ...state,
        infos: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case INFOS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
