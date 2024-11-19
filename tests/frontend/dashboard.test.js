import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard/Dashboard';

describe('Dashboard Component', () => {
  it('should render dashboard with links to all sections', () => {
    render(<Dashboard />);

    // Check if all the sections are present on the dashboard
    expect(screen.getByText(/Profile Management/i)).toBeInTheDocument();
    expect(screen.getByText(/Crop Management/i)).toBeInTheDocument();
    expect(screen.getByText(/Disease Detection/i)).toBeInTheDocument();
    expect(screen.getByText(/Community Section/i)).toBeInTheDocument();
    expect(screen.getByText(/Weather Forecast/i)).toBeInTheDocument();
    expect(screen.getByText(/Gallery/i)).toBeInTheDocument();
  });
});
