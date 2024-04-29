import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ClassroomSettingsPage from './ClassroomSettingsPage';
import { AuthContext } from '../../AuthContext';

// Mock fetch globally
global.fetch = jest.fn();

// Helper function to provide AuthContext values
const renderWithContext = (component) => {
  return render(
    <AuthContext.Provider value={{ classroom: null, setClassroom: jest.fn() }}>
      {component}
    </AuthContext.Provider>
  );
};

describe('ClassroomSettingsPage', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

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

    renderWithContext(<ClassroomSettingsPage />);

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

  it('shows an error message if the invite code is invalid', async () => {
    // Mock fetch response for failed join
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Invalid invite code.' })
    });

    renderWithContext(<ClassroomSettingsPage />);

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

  // Additional tests can be added here to test for creating a classroom or leaving a classroom
});
