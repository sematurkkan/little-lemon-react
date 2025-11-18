import { initializeTimes, updateTimes } from './Main';

describe("Reducer Functions", () => {

  describe("initializeTimes", () => {
    
    test('Returns an array of available times', () => {
      // Call the function
      const result = initializeTimes();
      
      // Assert it returns an array
      expect(Array.isArray(result)).toBe(true);
    });

    test('Returns the correct number of time slots', () => {
      const result = initializeTimes();
      
      // Should have 11 time slots
      expect(result.length).toBe(11);
    });

    test('Returns correct time values', () => {
      const result = initializeTimes();
      
      // Check for specific times
      expect(result).toContain('17:00');
      expect(result).toContain('17:30');
      expect(result).toContain('22:00');
    });

    test('Returns times in correct order', () => {
      const result = initializeTimes();
      
      const expectedTimes = [
        '17:00', '17:30', '18:00', '18:30', '19:00',
        '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

  });

  describe("updateTimes", () => {

    test('Returns the same state when action type is UPDATE_TIMES', () => {
      // Arrange
      const currentState = ['17:00', '17:30', '18:00'];
      const action = { type: 'UPDATE_TIMES', date: '2024-12-25' };
      
      // Act
      const newState = updateTimes(currentState, action);
      
      // Assert
      expect(newState).toEqual(currentState);
    });

    test('Returns state unchanged for unknown action type', () => {
      const currentState = ['17:00', '17:30', '18:00'];
      const action = { type: 'UNKNOWN_ACTION' };
      
      const newState = updateTimes(currentState, action);
      
      expect(newState).toEqual(currentState);
    });

    test('Does not mutate the original state', () => {
      const originalState = ['17:00', '17:30', '18:00'];
      const stateCopy = [...originalState];
      const action = { type: 'UPDATE_TIMES', date: '2024-12-25' };
      
      updateTimes(originalState, action);
      
      // Original should remain unchanged
      expect(originalState).toEqual(stateCopy);
    });

    test('Returns array of times for a valid date', () => {
      const currentState = ['17:00', '17:30', '18:00'];
      const action = { 
        type: 'UPDATE_TIMES', 
        date: '2024-12-25' 
      };
      
      const newState = updateTimes(currentState, action);
      
      // Should return an array
      expect(Array.isArray(newState)).toBe(true);
      
      // Should have times
      expect(newState.length).toBeGreaterThan(0);
    });

  });

});