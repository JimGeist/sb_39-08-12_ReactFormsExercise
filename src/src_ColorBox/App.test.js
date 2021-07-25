import { render, screen } from '@testing-library/react';
import App from './App';

test('whether the box width label appears', () => {
  render(<App />);
  const labelBoxWidth = screen.getByText(/box width:/i);
  expect(labelBoxWidth).toBeInTheDocument();
});
