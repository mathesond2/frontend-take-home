export default function npmDataReducer(state, action) {
  const { type, data, error } = action;
  switch (type) {
    case 'fetch':
      return { ...state, loading: true, error: null };
    case 'success':
      return { ...state, loading: false, data };
    case 'error':
      return { ...state, loading: false, error };
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
