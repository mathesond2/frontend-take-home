import { render, screen } from '@testing-library/react';
import React from 'react';
import ThemeToggle from './ThemeToggle';

const mockedToggleColorMode = jest.fn();

jest.mock('@chakra-ui/react', () => {
  const ui = jest.requireActual('@chakra-ui/react');
  return {
    ...ui,
    useColorMode: () => ({
      colorMode: 'light',
      toggleColorMode: mockedToggleColorMode(),
    }),
  };
});

describe('ThemeToggle', () => {
  it('renders a toggle button that calls the correct function when clicked.', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    button.click();
    expect(mockedToggleColorMode).toHaveBeenCalled();
  });
});
