import { render, screen, fireEvent } from '@testing-library/react';
import CropTracker from '../components/Crops/CropTracker';

describe('CropTracker Component', () => {
  it('should render the crop tracker form', () => {
    render(<CropTracker />);

    // Check if the crop name input field and the submit button are present
    expect(screen.getByLabelText(/Crop Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add Crop/i })).toBeInTheDocument();
  });

  it('should add a crop when form is submitted', () => {
    render(<CropTracker />);

    // Simulate entering crop details
    fireEvent.change(screen.getByLabelText(/Crop Name/i), { target: { value: 'Wheat' } });
    fireEvent.change(screen.getByLabelText(/Status/i), { target: { value: 'Growing' } });
    fireEvent.click(screen.getByRole('button', { name: /Add Crop/i }));

    // Expect the crop to appear in the list or a success message
    expect(screen.getByText(/Wheat/i)).toBeInTheDocument();
    expect(screen.getByText(/Growing/i)).toBeInTheDocument();
  });
});
