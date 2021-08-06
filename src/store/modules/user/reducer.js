import produce from 'immer';

const initialState = {
  token: '',
  name: '',
  id: null,
  email: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@user/LOGIN':
      return {
        token: action.token,
        name: action.name,
        email: action.email,
        id: action.id,
      };

    case '@user/LOGOUT':
      return produce(state, (draft) => {
        draft = initialState;
      });

    default:
      return state;
  }
}
