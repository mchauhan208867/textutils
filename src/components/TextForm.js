import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextForm = ({ heading, mode }) => {
  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const clickOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    const textArea = document.getElementById('mybox');
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
  };

  const handleExtraSpaces = () => {
    const newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = () => {
    setIsUnderline(!isUnderline);
  };

  return (
    <div className="container" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
      <h1>{heading}</h1>
      <div className="mb-3">
        <textarea
          placeholder="//Write your text here//"
          className="form-control"
          value={text}
          style={{
            backgroundColor: mode === 'dark' ? 'grey' : '#ECEBBD',
            color: mode === 'dark' ? 'white' : 'black',
            fontWeight: isBold ? 'bold' : 'normal',
            fontStyle: isItalic ? 'italic' : 'normal',
            textDecoration: isUnderline ? 'underline' : 'none',
          }}
          onChange={clickOnChange}
          id="mybox"
          rows="8"
          alt="Text area for user input"
        />
      </div>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleUpClick}
        key="uppercase-button"
      >
        Convert to Uppercase
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleLoClick}
        key="lowercase-button"
      >
        Convert to Lowercase
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleCopy}
        key="copy-button"
      >
        Copy text
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleExtraSpaces}
        key="remove-spaces-button"
      >
        Remove extra space
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleBoldClick}
        key="bold-button"
      >
        Bold
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleItalicClick}
        key="italic-button"
      >
        Italic
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleUnderlineClick}
        key="underline-button"
      >
        Underline
      </button>
      <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : '#3B4248' }}>
        <h1>Your text summary</h1>
        <p>
          {text.split(' ').filter((element) => element.length !== 0).length} words and {text.length}{' '}
          characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'enter your text here to preview it here'}</p>
        <h2>About</h2>
        <p>
          This website is created by Mayank chauhan. This website is used to manipulate the text enter
          by the user.
        </p>
      </div>
    </div>
  );
};

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default TextForm;