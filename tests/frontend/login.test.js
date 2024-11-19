import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Auth/Login';

describe('Login Component', () => {
  it('should render login form', () => {
    render(<Login />);

    // Check if the form elements are present
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('should display error message for invalid credentials', () => {
    render(<Login />);

    // Simulate form submission with invalid data
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'wrongUser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'wrongPassword' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Check for error message
    expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
  });

  it('should submit valid credentials', () => {
    render(<Login />);

    // Simulate form submission with valid data
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'correctUser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'correctPassword' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Expect to be redirected or see a success message
    expect(screen.queryByText(/Invalid credentials/i)).not.toBeInTheDocument();
  });
});
