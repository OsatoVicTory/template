import logo from './logo.svg';
import { useState, useEffect } from "react";
// import './App.css';
import Preloader from "./components/preloader/preloader";
import Home from "./pages/home/Home";

// import "./assets/scss/style.scss";

require("./assets/scss/style.scss");
import "./assets/css/style.css";
import "./assets/css/style.css.map";
import "./assets/css/fontawesome.min.css";
import "./assets/css/elegant-icons.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/slick.css"
import "./assets/css/slick-theme.css" ;
import "./assets/css/nice-select.css";
import "./assets/css/jquery.fancybox.min.css"

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [])
  return (
    <div className="body">
      {loading && <Preloader />}
      <Home />
    </div>
  );
}

export default App;
