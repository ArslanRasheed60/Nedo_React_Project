import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./components/main";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.css";

//css
import "./assets/css/bootstrap.min.css";
import "./assets/css/flaticon.css";
import "./assets/css/remixicon.css";
// import "./assets/css/owl.carousel.min.css";
import "./assets/css/fancybox.css";
// import "./assets/css/jquery-ui-min.css";
import "./assets/css/aos.css";
import "./assets/css/style.css";
import "./assets/css/dark-theme.css";
import "./assets/css/responsive.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
