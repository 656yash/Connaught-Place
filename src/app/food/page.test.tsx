import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodPage from './page';

describe('Food Page', () => {
  it('renders the main heading', () => {
    render(<FoodPage />);
    const heading = screen.getByText(/KHAO PUNE/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders all food spots', () => {
    render(<FoodPage />);
    expect(screen.getByText(/Vaishali/i)).toBeInTheDocument();
    expect(screen.getByText(/Kayani Bakery/i)).toBeInTheDocument();
    expect(screen.getByText(/Bedekar Misal/i)).toBeInTheDocument();
  });

  it('contains accessible route links', () => {
    render(<FoodPage />);
    const routeLinks = screen.getAllByRole('button', { name: /DEKH ROUTE/i });
    expect(routeLinks.length).toBeGreaterThan(0);
  });
});
