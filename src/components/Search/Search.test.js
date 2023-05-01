import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('Search', () => {
  const mockedHandleSearch = jest.fn();

  it('renders with associated elements', () => {
    render(<Search onSearch={mockedHandleSearch} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders typed query and fires function upon submit', () => {
    render(<Search onSearch={mockedHandleSearch} />);
    const textBox = screen.getByRole('textbox');
    const query = 'new test';

    act(() => {
      userEvent.type(textBox, query);
    });

    expect(textBox).toHaveValue(query);
    fireEvent.click(screen.getByRole('button'));
    expect(mockedHandleSearch).toHaveBeenCalled();
  });
});
