import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders with associated elements', () => {
    render(<Navbar />);
    const titleElement = screen.getByText(/NPM Package Search/i);
    expect(titleElement).toBeInTheDocument();
  });
});
