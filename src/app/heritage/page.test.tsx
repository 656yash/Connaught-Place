import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeritagePage from './page';

describe('Heritage Page', () => {
  it('renders the main heading', () => {
    render(<HeritagePage />);
    const heading = screen.getByText(/GHOOMO/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders heritage locations', () => {
    render(<HeritagePage />);
    expect(screen.getByText(/Shaniwar Wada/i)).toBeInTheDocument();
    expect(screen.getByText(/Aga Khan Palace/i)).toBeInTheDocument();
  });
});
