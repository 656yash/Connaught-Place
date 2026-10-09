import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeritagePage from './page';

describe('Heritage Page', () => {
  it('renders the main heading', () => {
    render(<HeritagePage />);
    expect(screen.getByText(/GHOOMO/i)).toBeInTheDocument();
  });
});
