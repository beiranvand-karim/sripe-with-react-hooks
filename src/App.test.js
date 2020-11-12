import { render, screen } from '@testing-library/react';
import Striper from './Striper';

test('renders learn react link', () => {
  render(<Striper />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
