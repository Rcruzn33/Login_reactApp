// import React from 'react';
// import ReactDOM from 'react-dom';
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import './index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';
// import MainPage from './components/mainPage';

// ReactDOM.render(<MainPage /> , document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import the createRoot function
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';
import MainPage from './components/mainPage';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(<MainPage />);

