
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-light");
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils-Light";  // to change text in favicon on changing mode  
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#17324d";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils-Dark";
    }
  }


  return (
    // <Router>
      <div>
        <Navbar title="TextUtiles2" about="about" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route path="/" element={<div className="container my-3" > */}
            <TextForm heading="Enter Text to analyze" mode={mode} showAlert={showAlert} />
          {/* </div>}> */}
          {/* </Route> */}
          {/* <Route path="/about" element={<div className="container mx-9"><About /></div>}></Route> */}
        {/* </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
