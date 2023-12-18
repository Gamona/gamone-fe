const initialState = {
  token_user: {
    accessToken: '',
    refreshToken: ''
  }

};

const tokenUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TOKEN_USER':
      return {
        ...state,
        tokenizer: {
          ...state.token_user,
          accessToken: action.value.access.token,
          refreshToken: action.value.refresh.token
        },
      };

    case 'CLEAR_TOKEN_USER':
      return {
        initialState,
      };
      
    default:
      break;
  }
  return state;
};

export default tokenUserReducer;
