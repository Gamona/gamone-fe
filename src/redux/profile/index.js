const initialState = {
  profile: {
    isLogin: false,
    name: '',
    email: '',
    specialize: [],
    education: '',
    description: '',
    role: '',
    userId: '',
    premium: '',

  }
};

const profileReducer = (state = initialState, action) => {
  // console.log(`redux: ${JSON.stringify(action)}`)
  switch (action.type) {
    case 'ADD_PROFILE':
      return {
        ...state,
        profile: {
          ...state.profile,
          isLogin: true,
          name: action.value.name,
          email: action.value.email,
          specialize: action.value.specialize,
          education: action.value.education,
          description: action.value.description,
          role: action.value.role,
          userId: action.value.userId,
          premium: action.value.premium,
        },
      };

    case 'CLEAR_PROFILE':
      return {
        ...state,
        profile: initialState.profile
      };
      
    default:
      break;
  }
  return state;
};

export default profileReducer;
