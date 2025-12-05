import { initializeTimes, updateTimes } from './Main';

// Mock the window.fetchAPI and window.submitAPI
describe("Main Component - Updated with API Integration", () => {
  
  // Setup before each test
  beforeEach(() => {
    // Mock fetchAPI on window
    window.fetchAPI = jest.fn((date) => {
      console.log('Mock fetchAPI called with:', date);
      // Return a non-empty array of available times
      return ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];
    });
    
    // Mock submitAPI on window
    window.submitAPI = jest.fn((formData) => {
      console.log('Mock submitAPI called with:', formData);
      return true;
    });
  });

  // Cleanup after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("initializeTimes", () => {
    
    test('should call fetchAPI with todays date', () => {
      console.log('Test: initializeTimes calls fetchAPI');
      
      // Call the function
      const result = initializeTimes();
      
      // Verify fetchAPI was called
      expect(window.fetchAPI).toHaveBeenCalled();
      
      // Verify result is an array
      expect(Array.isArray(result)).toBe(true);
    });

    test('should return an array of available times', () => {
      console.log('Test: initializeTimes returns array');
      
      const result = initializeTimes();
      
      // Should return a non-empty array
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    test('should return times from fetchAPI', () => {
      console.log('Test: initializeTimes returns fetchAPI result');
      
      const mockTimes = ['17:00', '17:30', '18:00', '18:30'];
      window.fetchAPI.mockReturnValue(mockTimes);
      
      const result = initializeTimes();
      
      // Should return the exact times from fetchAPI
      expect(result).toEqual(mockTimes);
    });

    test('should handle empty array from fetchAPI', () => {
      console.log('Test: initializeTimes handles empty array');
      
      window.fetchAPI.mockReturnValue([]);
      
      const result = initializeTimes();
      
      // Should return empty array without errors
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });

    test('should handle null/undefined from fetchAPI', () => {
      console.log('Test: initializeTimes handles null');
      
      window.fetchAPI.mockReturnValue(null);
      
      const result = initializeTimes();
      
      // Should return empty array instead of null
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe("updateTimes", () => {
    
    test('should call fetchAPI with the selected date', () => {
      console.log('Test: updateTimes calls fetchAPI with date');
      
      const currentState = ['17:00', '17:30'];
      const action = { 
        type: 'UPDATE_TIMES', 
        date: '2024-12-25' 
      };
      
      const result = updateTimes(currentState, action);
      
      // Verify fetchAPI was called with the date
      expect(window.fetchAPI).toHaveBeenCalledWith('2024-12-25');
      
      // Verify result is an array
      expect(Array.isArray(result)).toBe(true);
    });

    test('should return times from fetchAPI for the selected date', () => {
      console.log('Test: updateTimes returns times for selected date');
      
      const mockTimes = ['18:00', '18:30', '19:00'];
      window.fetchAPI.mockReturnValue(mockTimes);
      
      const currentState = ['17:00', '17:30'];
      const action = { 
        type: 'UPDATE_TIMES', 
        date: '2024-12-25' 
      };
      
      const result = updateTimes(currentState, action);
      
      // Should return the times from fetchAPI, not the current state
      expect(result).toEqual(mockTimes);
      expect(result).not.toEqual(currentState);
    });

    test('should return current state for unknown action type', () => {
      console.log('Test: updateTimes returns state for unknown action');
      
      const currentState = ['17:00', '17:30', '18:00'];
      const action = { type: 'UNKNOWN_ACTION' };
      
      const result = updateTimes(currentState, action);
      
      // Should return the same state
      expect(result).toEqual(currentState);
      
      // fetchAPI should not have been called
      expect(window.fetchAPI).not.toHaveBeenCalled();
    });

    test('should handle different dates and return different times', () => {
      console.log('Test: updateTimes returns different times for different dates');
      
      // First call for date 1
      window.fetchAPI.mockReturnValueOnce(['17:00', '17:30']);
      const result1 = updateTimes([], { type: 'UPDATE_TIMES', date: '2024-12-24' });
      
      // Second call for date 2
      window.fetchAPI.mockReturnValueOnce(['19:00', '19:30', '20:00']);
      const result2 = updateTimes([], { type: 'UPDATE_TIMES', date: '2024-12-25' });
      
      // Results should be different
      expect(result1).toEqual(['17:00', '17:30']);
      expect(result2).toEqual(['19:00', '19:30', '20:00']);
      
      // fetchAPI should have been called twice with different dates
      expect(window.fetchAPI).toHaveBeenCalledWith('2024-12-24');
      expect(window.fetchAPI).toHaveBeenCalledWith('2024-12-25');
      expect(window.fetchAPI).toHaveBeenCalledTimes(2);
    });

    test('should return empty array if fetchAPI returns empty', () => {
      console.log('Test: updateTimes returns empty array');
      
      window.fetchAPI.mockReturnValue([]);
      
      const action = { 
        type: 'UPDATE_TIMES', 
        date: '2024-12-25' 
      };
      
      const result = updateTimes(['17:00'], action);
      
      // Should return empty array from fetchAPI
      expect(result).toEqual([]);
    });

    test('should not call fetchAPI if action type is not UPDATE_TIMES', () => {
      console.log('Test: updateTimes does not call fetchAPI for other actions');
      
      window.fetchAPI.mockClear();
      
      const action = { type: 'OTHER_ACTION', date: '2024-12-25' };
      updateTimes(['17:00'], action);
      
      // fetchAPI should not be called
      expect(window.fetchAPI).not.toHaveBeenCalled();
    });
  });

});