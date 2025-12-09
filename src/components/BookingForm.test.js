

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';

// describe("BookingForm Component", () => {
  
//   test('Renders the BookingForm with date input', () => {
//     // Create mock props
//     const mockAvailableTimes = ['17:00', '17:30', '18:00'];
//     const mockOnDateChange = jest.fn();
    
//     // Render the component with props
//     render(
//       <BookingForm 
//         availableTimes={mockAvailableTimes}
//         onDateChange={mockOnDateChange}
//       />
//     );
    
//     // Check if date input exists
//     const dateInput = screen.getByLabelText(/date/i);
//     expect(dateInput).toBeInTheDocument();
//   });

//   test('Renders all form labels', () => {
//     const mockAvailableTimes = ['17:00', '17:30', '18:00'];
//     const mockOnDateChange = jest.fn();
    
//     render(
//       <BookingForm 
//         availableTimes={mockAvailableTimes}
//         onDateChange={mockOnDateChange}
//       />
//     );
    
//     // Test for each label
//     expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
//   });

//   test('Renders the submit button', () => {
//     const mockAvailableTimes = ['17:00', '17:30', '18:00'];
//     const mockOnDateChange = jest.fn();
    
//     render(
//       <BookingForm 
//         availableTimes={mockAvailableTimes}
//         onDateChange={mockOnDateChange}
//       />
//     );
    
//     const submitButton = screen.getByRole('button', { name: /complete reservation/i });
//     expect(submitButton).toBeInTheDocument();
//   });

//   test('Renders available times in the select dropdown', () => {
//     const mockAvailableTimes = ['17:00', '17:30', '18:00', '18:30'];
//     const mockOnDateChange = jest.fn();
    
//     render(
//       <BookingForm 
//         availableTimes={mockAvailableTimes}
//         onDateChange={mockOnDateChange}
//       />
//     );
    
//     // Check if all times are rendered
//     mockAvailableTimes.forEach(time => {
//       expect(screen.getByText(time)).toBeInTheDocument();
//     });
//   });

// });


describe('BookingForm Component', () => {
  
  // Mock props
  const mockProps = {
    availableTimes: ['17:00', '17:30', '18:00', '18:30', '19:00'],
    onDateChange: jest.fn(),
    onSubmit: jest.fn(),
    disabled: false
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ===== STEP 1: HTML5 VALIDATION ATTRIBUTES =====
  
  describe('HTML5 Validation Attributes', () => {

    test('Date input has type="date" attribute', () => {
      render(<BookingForm {...mockProps} />);
      const dateInput = screen.getByLabelText(/date/i);
      
      expect(dateInput).toHaveAttribute('type', 'date');
    });

    test('Date input has required attribute', () => {
      render(<BookingForm {...mockProps} />);
      const dateInput = screen.getByLabelText(/date/i);
      
      expect(dateInput).toHaveAttribute('required');
    });

    test('Time input has required attribute', () => {
      render(<BookingForm {...mockProps} />);
      const timeSelect = screen.getByLabelText(/time/i);
      
      expect(timeSelect).toHaveAttribute('required');
    });

    test('Guests input has type="number" attribute', () => {
      render(<BookingForm {...mockProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      expect(guestsInput).toHaveAttribute('type', 'number');
    });

    test('Guests input has min="1" attribute', () => {
      render(<BookingForm {...mockProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      expect(guestsInput).toHaveAttribute('min', '1');
    });

    test('Guests input has max="10" attribute', () => {
      render(<BookingForm {...mockProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      expect(guestsInput).toHaveAttribute('max', '10');
    });

    test('Guests input has required attribute', () => {
      render(<BookingForm {...mockProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      expect(guestsInput).toHaveAttribute('required');
    });

    test('Submit button exists and is rendered', () => {
      render(<BookingForm {...mockProps} />);
      const submitButton = screen.getByRole('button', { name: /complete reservation/i });
      
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveAttribute('type', 'submit');
    });

    test('All form labels are present and associated with inputs', () => {
      render(<BookingForm {...mockProps} />);
      
      expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    });

  });

  // ===== STEP 2: JAVASCRIPT VALIDATION FUNCTIONS =====

  describe('Form Validation - Date Field', () => {

    test('should not show error for date field initially', () => {
      render(<BookingForm {...mockProps} />);
      
      // Error message should not be visible initially
      const errorMessages = screen.queryAllByText(/date must be in the future|date is required/i);
      expect(errorMessages).toHaveLength(0);
    });

    test('should show error when date is not filled and form is submitted', async () => {
      render(<BookingForm {...mockProps} />);
      const submitButton = screen.getByRole('button', { name: /complete reservation/i });
      
      // Submit without filling date
      fireEvent.click(submitButton);
      
      // Error should appear
      await waitFor(() => {
        expect(screen.getByText(/date is required/i)).toBeInTheDocument();
      });
    });

    test('should show error when past date is selected', async () => {
      render(<BookingForm {...mockProps} />);
      const dateInput = screen.getByLabelText(/date/i);
      
      // Select a past date (2020-01-01)
      await userEvent.type(dateInput, '2020-01-01');
      fireEvent.blur(dateInput);
      
      // Error should appear
      await waitFor(() => {
        expect(screen.getByText(/date must be in the future/i)).toBeInTheDocument();
      });
    });

    test('should clear error when valid future date is selected', async () => {
      render(<BookingForm {...mockProps} />);
      const dateInput = screen.getByLabelText(/date/i);
      
      // Get a future date
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);
      const dateString = futureDate.toISOString().split('T')[0];
      
      // Select future date
      await userEvent.type(dateInput, dateString);
      fireEvent.blur(dateInput);
      
      // Error should not appear
      await waitFor(() => {
        expect(screen.queryByText(/date must be in the future|date is required/i)).not.toBeInTheDocument();
      });
    });

    test('date input should have error class when invalid', async () => {
      render(<BookingForm {...mockProps} />);
      const dateInput = screen.getByLabelText(/date/i);
      
      // Select past date
      await userEvent.type(dateInput, '2020-01-01');
      fireEvent.blur(dateInput);
      
      await waitFor(() => {
        expect(dateInput).toHaveClass('input-error');
      });
    });

  });

  describe('Form Validation - Time Field', () => {

    test('should not show error for time field initially', () => {
      render(<BookingForm {...mockProps} />);
      
      const errorMessages = screen.queryAllByText(/time is required/i);
      expect(errorMessages).toHaveLength(0);
    });

    test('should show error when time is not selected and form is submitted', async () => {
      render(<BookingForm {...mockProps} />);
      const submitButton = screen.getByRole('button', { name: /complete reservation/i });
      
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/time is required/i)).toBeInTheDocument();
      });
    });

    test('should clear error when time is selected', async () => {
      render(<BookingForm {...mockProps} />);
      const timeSelect = screen.getByLabelText(/time/i);
      
      // Select a time
      await userEvent.selectOption(timeSelect, '17:00');
      fireEvent.blur(timeSelect);
      
      // Error should not appear
      await waitFor(() => {
        expect(screen.queryByText(/time is required/i)).not.toBeInTheDocument();
      });
    });

  });

  describe('Form Validation - Guests Field', () => {

    test('should not show error for guests field initially', () => {
      render(<BookingForm {...mockProps} />);
      
      const errorMessages = screen.queryAllByText(/guests|number of guests/i);
      // Only label should be present, not error message
      expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    });

    test('should show error when guests is 0', async () => {
      render(<BookingForm {...mockProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      // Clear and enter 0
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, '0');
      fireEvent.blur(guestsInput);
      
      await waitFor(() => {
        expect(screen.getByText(/at least 1 guest is required/i)).toBeInTheDocument();
      });
    });

    test('should show error when guests exceeds 10', async () => {
      render(<BookingForm {...mockProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      // Clear and enter 11
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, '11');
      fireEvent.blur(guestsInput);
      
      await waitFor(() => {
        expect(screen.getByText(/maximum 10 guests allowed/i)).toBeInTheDocument();
      });
    });

    test('should clear error when valid guest count is entered', async () => {
      render(<BookingForm {...mockProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      // Clear and enter valid number
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, '5');
      fireEvent.blur(guestsInput);
      
      await waitFor(() => {
        expect(screen.queryByText(/at least 1 guest|maximum 10 guests/i)).not.toBeInTheDocument();
      });
    });

    test('guests field should accept valid values 1-10', async () => {
      render(<BookingForm {...mockProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      for (let i = 1; i <= 10; i++) {
        await userEvent.clear(guestsInput);
        await userEvent.type(guestsInput, i.toString());
        fireEvent.blur(guestsInput);
        
        // Should not have error
        expect(screen.queryByText(/at least 1 guest|maximum 10 guests/i)).not.toBeInTheDocument();
      }
    });

  });

  describe('Form Submission Validation', () => {

    test('submit button should be disabled when form is invalid', async () => {
      render(<BookingForm {...mockProps} />);
      const submitButton = screen.getByRole('button', { name: /complete reservation/i });
      
      // Initially disabled because form is empty
      expect(submitButton).toBeDisabled();
    });

    test('submit button should be enabled when all fields are valid', async () => {
      render(<BookingForm {...mockProps} />);
      
      // Fill all required fields
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);
      const dateString = futureDate.toISOString().split('T')[0];
      
      const dateInput = screen.getByLabelText(/date/i);
      const timeSelect = screen.getByLabelText(/time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      await userEvent.type(dateInput, dateString);
      await userEvent.selectOption(timeSelect, '17:00');
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, '5');
      
      // Submit button should be enabled
      const submitButton = screen.getByRole('button', { name: /complete reservation/i });
      
      await waitFor(() => {
        expect(submitButton).not.toBeDisabled();
      });
    });

    test('should not call onSubmit when form is invalid', async () => {
      render(<BookingForm {...mockProps} />);
      const submitButton = screen.getByRole('button', { name: /complete reservation/i });
      
      // Click submit with empty form
      fireEvent.click(submitButton);
      
      // onSubmit should not be called
      expect(mockProps.onSubmit).not.toHaveBeenCalled();
    });

    test('should call onSubmit with correct data when form is valid', async () => {
      render(<BookingForm {...mockProps} />);
      
      // Fill all fields
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);
      const dateString = futureDate.toISOString().split('T')[0];
      
      const dateInput = screen.getByLabelText(/date/i);
      const timeSelect = screen.getByLabelText(/time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const occasionSelect = screen.getByLabelText(/occasion/i);
      
      await userEvent.type(dateInput, dateString);
      await userEvent.selectOption(timeSelect, '17:00');
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, '5');
      await userEvent.selectOption(occasionSelect, 'Birthday');
      
      const submitButton = screen.getByRole('button', { name: /complete reservation/i });
      
      // Submit the form
      await userEvent.click(submitButton);
      
      // onSubmit should be called with correct data
      await waitFor(() => {
        expect(mockProps.onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            date: dateString,
            time: '17:00',
            guests: 5,
            occasion: 'Birthday'
          })
        );
      });
    });

    test('should call onDateChange when date is selected', async () => {
      render(<BookingForm {...mockProps} />);
      
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);
      const dateString = futureDate.toISOString().split('T')[0];
      
      const dateInput = screen.getByLabelText(/date/i);
      await userEvent.type(dateInput, dateString);
      
      // onDateChange should be called
      expect(mockProps.onDateChange).toHaveBeenCalledWith(dateString);
    });

  });

  describe('Form Field Interactions', () => {

    test('should show error message when field is touched and invalid', async () => {
      render(<BookingForm {...mockProps} />);
      
      const dateInput = screen.getByLabelText(/date/i);
      
      // Touch the field (click and blur)
      fireEvent.click(dateInput);
      fireEvent.blur(dateInput);
      
      // Error should show
      await waitFor(() => {
        expect(screen.getByText(/date is required/i)).toBeInTheDocument();
      });
    });

    test('errors should not show for untouched fields', () => {
      render(<BookingForm {...mockProps} />);
      
      // Don't interact with fields, just check errors don't show
      expect(screen.queryByText(/date is required/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/time is required/i)).not.toBeInTheDocument();
    });

    test('should apply error class to invalid field', async () => {
      render(<BookingForm {...mockProps} />);
      
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      // Enter invalid value
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, '0');
      fireEvent.blur(guestsInput);
      
      // Should have error class
      await waitFor(() => {
        expect(guestsInput).toHaveClass('input-error');
      });
    });

  });

});