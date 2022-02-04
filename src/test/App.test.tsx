import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app component', () => {
  render(<App />);
  const element = screen.getByText(/landing page/i);
  expect(element).toBeInTheDocument();
});
