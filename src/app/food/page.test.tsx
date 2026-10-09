import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodPage from './page';

describe('Food Page', () => {
  it('renders the main heading', () => {
    render(<FoodPage />);
    expect(screen.getByText(/KHAO PUNE/i)).toBeInTheDocument();
  });
});
