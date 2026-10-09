import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import KharidoPage from './page';

describe('Kharido Page', () => {
  it('renders the main heading', () => {
    render(<KharidoPage />);
    expect(screen.getByText(/KHARIDO/i)).toBeInTheDocument();
  });
});
