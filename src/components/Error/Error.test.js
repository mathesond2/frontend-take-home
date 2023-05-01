import { render, screen } from '@testing-library/react';
import Error from './Error';

describe('Error', () => {
  it('renders with associated elements', () => {
    render(<Error text={'slight issue'} />);
    const linkElement = screen.getByText(/slight issue/i);
    expect(linkElement).toBeInTheDocument();
  });
});
