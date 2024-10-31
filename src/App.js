import React from "react";
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState(false);
  const [switchBtnText, setSwitchBtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  
  const setAlertMethod = (message , type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === false) {
      document.title = 'TextUtils - DarkMode';
  
      setMode(true);
      setSwitchBtnText('Enable Light Mode');
      setAlertMethod("Dark mode has been enabled", "secondary");
  
      const body = document.querySelector("body");
      if (body) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
      }
  
      const textArea = document.querySelector(".textArea");
      if (textArea) {
        textArea.style.backgroundColor = '#7b7a7a';
        textArea.style.color = 'white';
      }
    } 
    else {
      document.title = 'TextUtils - LightMode';
  
      setMode(false);
      setSwitchBtnText('Enable Dark Mode');
      setAlertMethod("Light mode has been enabled", "secondary");
  
      const body = document.querySelector("body");
      if (body) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
      }
  
      const textArea = document.querySelector(".textArea");
      if (textArea) {
        textArea.style.backgroundColor = 'white';
        textArea.style.color = 'black';
      }
    }
  };
  
  return (
    <>
      <Router>
        <Navbar title="TextUtils" color='secondary' switchBtnText={switchBtnText} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Textform setAlertMethod={setAlertMethod} title='Enter your text here :' heading='Enter the text to analyze below' mode={mode} />}/>
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
