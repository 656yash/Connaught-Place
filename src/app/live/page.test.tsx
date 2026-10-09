import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LivePage from './page';

describe('Live Page', () => {
  it('renders the main heading', () => {
    render(<LivePage />);
    expect(screen.getByText(/CITY PULSE/i)).toBeInTheDocument();
  });
});
