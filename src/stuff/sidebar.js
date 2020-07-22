import React from "react";
import "./sidebar.css";
import {throttle} from 'lodash'

function SideBar() {
  function showNav() {
    document.getElementById("sidebar").classList.toggle("active");
  }

//   window.addEventListener('scroll', function(ev) {

//     var someDiv = document.querySelector('.front-page')
//     var distanceToTop = someDiv.getBoundingClientRect();
 
//     console.log(distanceToTop);
//  });

 window.addEventListener('scroll', throttle(dist, 100))

 function dist() {
    let frontPage = document.querySelector('.front-page')
    let distanceFromTop = Math.abs(frontPage.getBoundingClientRect().top)

    let index = ~~((distanceFromTop+(window.innerHeight/2))/window.innerHeight) + 1


    let pos;
    if(index > 1){
      document.querySelector(`.highlight`).classList.remove('highlight')
      pos = document.querySelector(`.nav-item:nth-child(${index-1})`)
      pos.classList.add('highlight')
    }

    

    if(index === 1) {
      document.querySelector('.nav-bar').style.display = 'none'
    } else {
      document.querySelector('.nav-bar').style.display = 'inline-block'

    }
 }



  return (
    <nav className="nav-bar ">
      <ul className="nav-bar-nav">

      <li class="nav-item">
      <div className='chu'>
          <a>Reflection</a>
          </div>
      </li>

        <li class="nav-item highlight">
          <div className='chu'>
          <a>Software Testing</a>
          </div>
        </li>

        <li class="nav-item">
        <div className='chu'>
          <a>Frontend Development</a>
        </div>
      </li>

      <li class="nav-item">
      <div className='chu'>
          <a>Bug Fixing</a>
          </div>
      </li>

      

      
      </ul>
    </nav>
  );
}

export default SideBar;
