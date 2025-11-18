import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

describe("BookingForm Component", () => {
  
  test('Renders the BookingForm with date input', () => {
    // Create mock props
    const mockAvailableTimes = ['17:00', '17:30', '18:00'];
    const mockOnDateChange = jest.fn();
    
    // Render the component with props
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes}
        onDateChange={mockOnDateChange}
      />
    );
    
    // Check if date input exists
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toBeInTheDocument();
  });

  test('Renders all form labels', () => {
    const mockAvailableTimes = ['17:00', '17:30', '18:00'];
    const mockOnDateChange = jest.fn();
    
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes}
        onDateChange={mockOnDateChange}
      />
    );
    
    // Test for each label
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('Renders the submit button', () => {
    const mockAvailableTimes = ['17:00', '17:30', '18:00'];
    const mockOnDateChange = jest.fn();
    
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes}
        onDateChange={mockOnDateChange}
      />
    );
    
    const submitButton = screen.getByRole('button', { name: /complete reservation/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('Renders available times in the select dropdown', () => {
    const mockAvailableTimes = ['17:00', '17:30', '18:00', '18:30'];
    const mockOnDateChange = jest.fn();
    
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes}
        onDateChange={mockOnDateChange}
      />
    );
    
    // Check if all times are rendered
    mockAvailableTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

});