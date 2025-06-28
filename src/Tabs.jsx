// React import for creating functional components
import React from "react";
// Import component-specific styles for the tab functionality
import "./Tabs.css";

/**
 * Tabs Component
 *
 * A fully functional tab system implemented using radio buttons and CSS.
 * This approach provides several benefits:
 * - No JavaScript state management needed
 * - Inherent accessibility through native radio button behavior
 * - Keyboard navigation support (arrow keys, tab key)
 * - Screen reader compatibility
 *
 * The component displays three tabs: HTML, CSS, and JavaScript
 * Each tab shows educational content about web technologies.
 *
 * @returns {JSX.Element} A complete tab interface with content panels
 */
export const Tabs = () => {
  return (
    <section className="tabs-container">
      {/* Wrapper div for all tab-related elements */}
      <div className="tabs">
        {/* 
          Radio Input Group - The Foundation of Tab Functionality
          
          These hidden radio inputs control which tab is active.
          Using the same 'name' attribute groups them together,
          ensuring only one can be selected at a time.
          
          The 'id' attributes are used by labels for accessibility
          and by CSS selectors for styling and content display.
        */}

        {/* HTML tab radio input - default selected tab */}
        <input type="radio" name="tab" id="tab-html" defaultChecked />

        {/* CSS tab radio input */}
        <input type="radio" name="tab" id="tab-css" />

        {/* JavaScript tab radio input */}
        <input type="radio" name="tab" id="tab-js" />

        {/* 
          Tab Labels - Clickable Tab Headers
          
          These labels serve as the visible tab buttons.
          The 'htmlFor' attribute connects each label to its corresponding
          radio input, making the entire label clickable.
          
          When a label is clicked, it automatically selects the associated
          radio input, triggering the CSS changes that show/hide content.
        */}

        {/* HTML tab label - connects to tab-html radio input */}
        <label htmlFor="tab-html">HTML </label>

        {/* CSS tab label - connects to tab-css radio input */}
        <label htmlFor="tab-css">CSS </label>

        {/* JavaScript tab label - connects to tab-js radio input */}
        <label htmlFor="tab-js">JavaScript</label>

        {/* 
          Content Container - Tab Panels
          
          Contains all the content for each tab.
          Only one piece of content is visible at a time,
          controlled by CSS selectors that check which radio button is selected.
          
          Each paragraph has a class that corresponds to a tab,
          and CSS rules show/hide content based on the selected radio input.
        */}
        <div className="content">
          {/* HTML content panel - shown when HTML tab is selected */}
          <p className="html">
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>

          {/* CSS content panel - shown when CSS tab is selected */}
          <p className="css">
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>

          {/* JavaScript content panel - shown when JavaScript tab is selected */}
          <p className="js">
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
