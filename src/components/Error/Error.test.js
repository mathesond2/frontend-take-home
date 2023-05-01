import { render, screen } from '@testing-library/react';
import Error from './Error';

describe('Error', () => {
  it('renders with associated elements', () => {
    const errorText = 'slight issue';
    render(<Error text={errorText} />);
    const linkElement = screen.getByText(errorText);
    expect(linkElement).toBeInTheDocument();
  });
});
