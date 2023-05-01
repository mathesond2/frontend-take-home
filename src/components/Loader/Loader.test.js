import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  it('renders with associated elements', () => {
    render(<Loader />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
