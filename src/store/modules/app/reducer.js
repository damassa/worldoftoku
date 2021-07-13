import produce from 'immer';

const initialState = {
  login: {
    message: '',
    active: false,
    severity: 'error',
  },

  edit: {
    message: '',
    active: false,
    severity: 'error',
  },
};

/**
 * Reducer to store app State.
 *
 * @param {Controll drawer state} drawerOpen
 */
export default function app(state = initialState, action) {
  switch (action.type) {
    case '@app/LOGIN':
      return produce(state, (draft) => {
        // draft.snackbar = {
        //   active: true,
        //   message: action.message,
        //   severity: action.severity,
        // };
      });

    case '@app/EDIT':
      return produce(state, (draft) => {
        // draft.snackbar = {
        //   ...state.snackbar,
        //   active: false,
        // };
      });

    default:
      return state;
  }
}
