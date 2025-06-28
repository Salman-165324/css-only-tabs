// Import the Tabs component which contains our tab functionality
import { Tabs } from "./Tabs";

/**
 * Main App Component
 *
 * This is the root component of our React application.
 * It serves as a simple wrapper that renders the Tabs component.
 *
 * The App component follows a minimalist approach, delegating
 * all tab-related functionality to the specialized Tabs component.
 *
 * @returns {JSX.Element} The main application layout with Tabs component
 */
function App() {
  // Return the main application structure
  // Using React Fragment (<>) to avoid adding unnecessary DOM elements
  return (
    <>
      {/* Render the main Tabs component which contains all tab functionality */}
      <Tabs />
    </>
  );
}

// Export the App component as the default export for use in main.jsx
export default App;
