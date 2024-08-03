import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';  // Combined React and useState import

function App() {
  const [mode, setMode] = useState('light'); // Mode state to handle light/dark theme
  const [alert, setAlert] = useState(null);  // Alert state to show messages

  // Function to show alert messages
  const showAlert = (message, type) => { 
    setAlert({
      msg: message,
      type: type 
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#A4C495';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Navbar title="Mayank" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
