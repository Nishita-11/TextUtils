
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [bgmode, setBgMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [btncolor, setBtnColor] = useState('dark');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const blueMode = () => {
      setMode('dark');
      setBgMode('blue');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode activated","success");
      setBtnColor('primary');
      console.log("blue mode activated");
  }

  const greenMode = () => {
      setMode('dark');
      setBgMode('green');
      document.body.style.backgroundColor = '#0d2419';
      showAlert("Dark mode activated","success");
      setBtnColor('success');
      console.log("green mode activated");
  }

  const lightMode = () => {
    setMode('light');
    setBgMode('white');
    document.body.style.backgroundColor = 'white';
    setBtnColor('dark');
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} blueMode={blueMode} greenMode={greenMode} lightMode={lightMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse" btncolor={btncolor} mode={mode} />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
