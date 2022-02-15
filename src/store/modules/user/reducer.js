import produce from 'immer';

const initialState = {
  token: '',
  name: '',
  id: null,
  email: '',
  favorites: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@user/LOGIN':
      return {
        token: action.token,
        name: action.name,
        email: action.email,
        id: action.id,
        favorites: action.favorites,
      };

    case '@user/LOGOUT':
      return initialState;

    case '@user/UPDATE':
      return produce(state, (draft) => {
        draft.email = action.email;
        draft.name = action.name;
      });

    case '@user/SET_FAVORITES':
      return produce(state, (draft) => {
        draft.favorites = action.favorites;
      });

    default:
      return state;
  }
}
