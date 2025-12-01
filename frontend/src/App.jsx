import React, { useState, useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme, darkTheme } from './theme';
import { useAuth } from './context/AuthContext';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import TaskForm from './pages/TaskForm';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );
  const { user, loading } = useAuth();

  const currentTheme = useMemo(
    () => (darkMode ? darkTheme : theme),
    [darkMode]
  );

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/signup"
          element={user ? <Navigate to="/dashboard" /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={user ? <Navigate to="/dashboard" /> : <SignIn />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout toggleTheme={toggleTheme} darkMode={darkMode}>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout toggleTheme={toggleTheme} darkMode={darkMode}>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/task/new"
          element={
            <ProtectedRoute>
              <Layout toggleTheme={toggleTheme} darkMode={darkMode}>
                <TaskForm />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/task/edit/:id"
          element={
            <ProtectedRoute>
              <Layout toggleTheme={toggleTheme} darkMode={darkMode}>
                <TaskForm />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

