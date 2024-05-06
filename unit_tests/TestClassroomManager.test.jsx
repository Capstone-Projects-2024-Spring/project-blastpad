// Importing necessary libraries and modules
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ClassroomSettingsPage } from './home/webapp/src/components/Settings/ClassroomSettingsPage'; // Importing the component to be tested
import { AuthContext } from './home/webapp/src/AuthContext'; // Importing the AuthContext

// Mock fetch globally
global.fetch = jest.fn(); // Mocking the global fetch function using Jest

// Helper function to provide AuthContext values
const renderWithContext = (component) => {
  return render(
    <AuthContext.Provider value={{ classroom: null, setClassroom: jest.fn() }}>
      {component}
    </AuthContext.Provider>
  );
};

// Test suite for the ClassroomSettingsPage component
describe('ClassroomSettingsPage', () => {
  beforeEach(() => {
    fetch.mockClear(); // Clearing any mock fetch calls before each test
  });

  // Test case: Allows the user to join a classroom by entering an invite code
  it('allows the user to join a classroom by entering an invite code', async () => {
    // Mock fetch response for joining classroom
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        classroom: [{
          id: 7,
          created_at: '2024-04-28T18:24:14.428383+00:00',
          invite_code: 'applebaum',
          students: null,
          teacher: 'Ian Applebaum',
          title: "Applebaum's Class",
          description: 'Temple CIS Games!'
        }]
      })
    });

    renderWithContext(<ClassroomSettingsPage />); // Rendering the ClassroomSettingsPage component

    // Simulate user typing an invite code
    fireEvent.change(screen.getByLabelText('Enter your Invite Code!'), {
      target: { value: 'applebaum' }
    });

    // Simulate user clicking the join button
    fireEvent.click(screen.getByRole('button', { name: /join class/i }));

    // Wait for the fetch to be called and the UI to update
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/join/classroom/applebaum', { method: 'GET' });
      expect(screen.getByText("Joined Applebaum's Class")).toBeInTheDocument();
    });
  });


  // Test case: Shows an error message if the invite code is invalid
  it('shows an error message if the invite code is invalid', async () => {
    // Mock fetch response for failed join
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Invalid invite code.' })
    });

    renderWithContext(<ClassroomSettingsPage />); // Rendering the ClassroomSettingsPage component

    // Simulate user typing an invite code
    fireEvent.change(screen.getByLabelText('Enter your Invite Code!'), {
      target: { value: 'wrongcode' }
    });

    // Simulate user clicking the join button
    fireEvent.click(screen.getByRole('button', { name: /join class/i }));

    // Wait for the fetch to be called and the UI to update
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/join/classroom/wrongcode', { method: 'GET' });
      expect(screen.getByText("Invalid invite code.")).toBeInTheDocument();
    });
  });


  // Test case: Allows the user to leave the classroom
  it('allows the user to leave the classroom', async () => {
    // Setup initial state with a user already in a classroom
    // This simulates a scenario where the user is currently part of a classroom before they attempt to leave.
    renderWithContext(
      <AuthContext.Provider value={{ classroom: { title: "Applebaum's Class", teacher: 'Ian Applebaum' }, setClassroom: jest.fn() }}>
        <ClassroomSettingsPage />
      </AuthContext.Provider>
    );

    // Simulate user clicking the leave button
    // This action triggers the event that should result in the user leaving the classroom.
    fireEvent.click(screen.getByRole('button', { name: /leave classroom/i }));

    // Expect the setClassroom function to have been called with `null` to signify leaving the classroom
    // This checks that the application correctly handles the state change associated with leaving a classroom.
    await waitFor(() => {
      expect(setClassroom).toHaveBeenCalledWith(null);
      // Verify that the appropriate status message "Leaving Classroom..." is displayed to the user.
      // This message should indicate to the user that the leave action is being processed.
      expect(screen.getByText('Leaving Classroom...')).toBeInTheDocument();
    });
  });


});
