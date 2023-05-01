import { act, renderHook } from '@testing-library/react';
import { useNpmData } from './useNpmData';

describe('useNpmData', () => {
  afterEach(() => {
    delete global.fetch;
  });

  it('fetches npm data successfully', async () => {
    const mockData = {
      package: {
        name: 'test',
        description: 'my test description',
        links: {
          npm: 'https://www.npmjs.com/package/test',
        },
        keywords: ['testing-keyword-1', 'testing-keyword-2'],
      },
    };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      }),
    );

    const { result } = renderHook(() => useNpmData());

    await act(async () => {
      result.current.fetchNpmData('test');
    });

    const { npmData } = result.current;
    const { data, loading, error } = npmData;

    expect(data).toEqual(mockData);
    expect(loading).toEqual(false);
    expect(error).toEqual(null);
  });

  it('provides error if occurring', async () => {
    const mockError = 'a test error occurred';

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.reject(mockError),
      }),
    );

    const { result } = renderHook(() => useNpmData());

    await act(async () => {
      result.current.fetchNpmData('test');
    });

    const { npmData } = result.current;
    const { data, loading, error } = npmData;

    expect(data).toEqual([]);
    expect(loading).toEqual(false);
    expect(error).toEqual(mockError);
  });
});
