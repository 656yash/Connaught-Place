import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

describe('Landing Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    
    // Check for the main title
    const heading = screen.getByText(/CONNAUGHT/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the explore button', () => {
    render(<Home />);
    
    // Check for the CTA button
    const button = screen.getByText(/EXPLORE KAROONGA/i);
    expect(button).toBeInTheDocument();
  });

  it('renders navigation stickers with proper ARIA labels', () => {
    render(<Home />);
    
    // Check if the accessible links exist
    const foodLink = screen.getByLabelText(/Explore Food Section/i);
    const heritageLink = screen.getByLabelText(/Explore Heritage Section/i);
    const shoppingLink = screen.getByLabelText(/Explore Shopping Section/i);
    
    expect(foodLink).toBeInTheDocument();
    expect(heritageLink).toBeInTheDocument();
    expect(shoppingLink).toBeInTheDocument();
  });
});
