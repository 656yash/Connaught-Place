import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComparePage from './page';

describe('Compare Page', () => {
  it('renders the main heading', () => {
    render(<ComparePage />);
    expect(screen.getByText(/VS ARENA/i)).toBeInTheDocument();
  });
});
