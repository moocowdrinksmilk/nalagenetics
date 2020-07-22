import React from 'react';
import ReactDOM from'react-dom';
import logo from './logo.svg';
import './App.scss';
import 'react-bootstrap';
import SoftwareTesting from './stuff/softwareTesting';
import SideBar from './stuff/sidebar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import FrontendDev from './stuff/frontendDev';
import BugFix from './stuff/bugFix';
import WebScrape from './stuff/webScrape';

AOS.init();

function MyInfo() {
  

  return (
      <div className='container front-page background' data-aos="fade-up" data-aos-delay="500" data-aos-offset="200">
        <h1 className=''>
          My Internship at Nalagenetics
        </h1>
      </div>
    
  )
}



function App() {
  return (
    <div>
      <SideBar />
      <MyInfo/>
      <WebScrape/>
      <SoftwareTesting/>
      <FrontendDev/>
      <BugFix/>
    </div>
  )
}

export default App;
