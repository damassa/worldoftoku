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
      return initialState;

    case '@user/UPDATE':
      return produce(state, (draft) => {
        draft.email = action.email;
        draft.name = action.name;
      });

    default:
      return state;
  }
}
