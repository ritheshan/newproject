import { render, screen, fireEvent } from '@testing-library/react';
import Signup from '../components/Auth/Signup';

describe('Signup Component', () => {
  it('should render signup form', () => {
    render(<Signup />);

    // Check if the form elements are present
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /signup/i })).toBeInTheDocument();
  });

  it('should display error message for missing fields', () => {
    render(<Signup />);

    // Simulate form submission with missing data
    fireEvent.click(screen.getByRole('button', { name: /signup/i }));

    // Check for error message
    expect(screen.getByText(/Please fill in all fields/i)).toBeInTheDocument();
  });

  it('should submit valid signup data', () => {
    render(<Signup />);

    // Simulate form submission with valid data
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'newUser' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'newPassword' } });
    fireEvent.click(screen.getByRole('button', { name: /signup/i }));

    // Expect success or redirection
    expect(screen.queryByText(/Please fill in all fields/i)).not.toBeInTheDocument();
  });
});
