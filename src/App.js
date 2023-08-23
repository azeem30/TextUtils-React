
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
  const toggleMode = (cls) => {
    removeBodyClass()
    document.body.classList.add('bg-'+cls);
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
  const removeBodyClass = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-succcess')
    document.body.classList.remove('bg-dark')
  }
  return (
    <>
      <Navbar title='TextUtils' about='About' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm showAlert={showAlert} heading='Word Counter' mode={mode}/>
      </div>
    </>
  );
}

export default App;
