import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar/Navbar'
import './reset.css'
import Background from './Navbar/Background';
import Carousel from './Carousel/Carousel';
import Menu from './Menu/Menu';
import First_part from './Footer/First_Part/First_part'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Background />
    <div className='all_element'><Carousel /></div>
    
    <Menu />
    <First_part />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
