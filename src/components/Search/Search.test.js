import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  const mockedHandleSearch = jest.fn();

  it('renders with associated elements', () => {
    render(<Search onSearch={mockedHandleSearch} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    const textBox = screen.getByRole('textbox');
    expect(textBox).toBeInTheDocument();
  });

  it('renders with type query and fires function upon submit', () => {
    render(<Search onSearch={mockedHandleSearch} />);
    const button = screen.getByRole('button');
    const textBox = screen.getByRole('textbox');
    const query = 'new test';
    userEvent.type(textBox, query);
    expect(textBox).toHaveValue(query);
    fireEvent.click(button);
    expect(mockedHandleSearch).toHaveBeenCalled();
  });
});
