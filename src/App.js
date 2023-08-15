import Navbar from './Components/Navbar';
import './App.css';
import { useState } from 'react';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("DarkMode Enabled", "success");
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode Enabled", "success");
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
  }
  return (
    <>
      <Navbar title='TextUtils' about='About' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm showAlert={showAlert} heading='Enter your text below' mode={mode}/>
      </div>
    </>
  );
}

export default App;
