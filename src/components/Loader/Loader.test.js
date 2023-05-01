import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  it('renders with associated elements', () => {
    const { getByRole } = render(<Loader />);
    expect(getByRole('progressbar')).toBeInTheDocument();
  });
});
