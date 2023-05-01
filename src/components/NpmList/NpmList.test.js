import { render, screen } from '@testing-library/react';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import NpmListItem from '../NpmListItem/NpmListItem';
import NpmList from './NpmList';

jest.mock('../NpmListItem/NpmListItem', () => jest.fn(() => null));
jest.mock('../Error/Error', () => jest.fn(() => null));
jest.mock('../Loader/Loader', () => jest.fn(() => null));

describe('NpmList', () => {
  it('renders an empty list if no data', () => {
    const initialData = {
      data: [],
      loading: false,
      error: null,
    };
    render(<NpmList npmData={initialData} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('renders a list with 1 item', () => {
    const mockData = {
      data: [
        {
          package: {
            name: 'test',
            description: 'my test description',
            links: {
              npm: 'https://www.npmjs.com/package/test',
            },
            keywords: ['testing-keyword-1', 'testing-keyword-2'],
          },
        },
      ],
      loading: false,
      error: false,
    };
    render(<NpmList npmData={mockData} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(NpmListItem).toHaveBeenCalledTimes(1);
  });

  it('renders Error component if error', () => {
    const mockData = {
      data: [],
      loading: false,
      error: true,
    };
    render(<NpmList npmData={mockData} />);
    expect(Error).toHaveBeenCalledTimes(1);
  });

  it('renders Loader component if loading', () => {
    const mockData = {
      data: [],
      loading: true,
      error: false,
    };
    render(<NpmList npmData={mockData} />);
    expect(Loader).toHaveBeenCalledTimes(1);
  });
});
