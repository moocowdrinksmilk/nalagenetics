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
import {throttle} from 'lodash'
import PersonalInfo from './stuff/personalinfo';


AOS.init();

function MyInfo() {

  return (
      <div className='front-page background' data-aos="fade-up" data-aos-delay="500" data-aos-offset="200">
        <h1 className='container'>
          My Internship at Nalagenetics
        </h1>
      </div>
    
  )
}



function App() {
  // window.addEventListener('scroll', throttle(() => {
  //   if (window.innerHeight >= 1200){
  //   document.querySelector('.background').style.height = window.innerHeight + 'px'
  //   }
  // }), 2000)
  return (
    <div>
      <SideBar />
      <MyInfo/>
      <WebScrape/>
      <SoftwareTesting/>
      <FrontendDev/>
      <BugFix/>
      <PersonalInfo/>
    </div>
  )
}

export default App;
