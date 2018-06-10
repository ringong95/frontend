import { types as actionTypes } from './actions';

const initialState = {
  isLoading: false,
  isSubmitting: false,
  service: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SERVICE_CREATE_STARTED:
      return {
        ...state,
        isSubmitting: true,
      };
    case actionTypes.SERVICE_CREATE_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        service: action.payload,
      };
    case actionTypes.SERVICE_CREATE_ERROR:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false,
      };
    case actionTypes.SERVICE_FETCH_STARTED:
    case actionTypes.SERVICE_SAVE_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SERVICE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        service: action.payload,
      };
    case actionTypes.SERVICE_SAVE_SUCCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.SERVICE_FETCH_ERROR:
    case actionTypes.SERVICE_SAVE_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case 'USER_PROFILE_FETCHED':
      return {
        ...state,
        userProfile: action.payload.userProfile,
      };
    default:
      return state;
  }
};