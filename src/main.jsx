// React imports - StrictMode helps identify potential problems in an application
import { StrictMode } from 'react'
// React DOM client for rendering React components to the DOM
import { createRoot } from 'react-dom/client'
// Global CSS styles that apply to the entire application
import './index.css'
// Main App component that serves as the root of our component tree
import App from './App.jsx'

// Create the root React element and render the entire application
// StrictMode is a wrapper that helps catch common mistakes and deprecated features
// It only runs in development mode and doesn't affect the production build
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
