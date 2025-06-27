import React from "react";
import "./Tabs.css";
export const Tabs = () => {
  return (
    <section className="tabs-container">
      <div className="tabs">
        <input type="radio" name="tab" id="tab-html" defaultChecked />
        <input type="radio" name="tab" id="tab-css" />
        <input type="radio" name="tab" id="tab-js" />

        <label htmlFor="tab-html">HTML </label>
        <label htmlFor="tab-css">CSS </label>
        <label htmlFor="tab-js">JavaScript</label>

        <div className="content">
          <p className="html">
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
          <p className="css">
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
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
