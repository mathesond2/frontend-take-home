import { useReducer } from 'react';
import npmDataReducer from '../reducers/npmDataReducer';

function buildNpmUrl(query) {
  return `https://api.npms.io/v2/search/suggestions?q=${query}`;
}

const initialData = {
  data: [],
  loading: false,
  error: null,
};

export function useNpmData() {
  const [npmData, dispatchNpmData] = useReducer(npmDataReducer, initialData);

  async function fetchNpmData(val) {
    try {
      dispatchNpmData({ type: 'fetch' });
      if (val.length === 0) {
        dispatchNpmData({ type: 'success', data: [] });
        return;
      }

      const data = await fetch(buildNpmUrl(val));
      const parsedData = await data.json();
      dispatchNpmData({ type: 'success', data: parsedData });
    } catch (error) {
      dispatchNpmData({ type: 'error', error });
      console.error('error: ', error);
    }
  }

  return { npmData, fetchNpmData };
}
