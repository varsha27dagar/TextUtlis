import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light')
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar tittle="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Textarea greetings="Welcome to TextUtils" heading="Customize Your Text!" mode={Mode} />
    </>
  );
}

export default App;
