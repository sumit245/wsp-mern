import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/css/style.css"
import "./assets/css/pages/index.css"
import "./assets/css/aos.css"
import "./assets/css/blog.css"
import "./assets/bootstrap/css/bootstrap.css"
import "./assets/sass/theme.css"
import "./assets/css/refer.css"
import "./assets/css/theme.css"
import "./assets/vendor/font-awesome/css/font-awesome.css"
import "./assets/vendor/slick/slick.min.css"
import "./assets/css/sweetalert.css"
import "./index.css"
import "./assets/css/footer.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
