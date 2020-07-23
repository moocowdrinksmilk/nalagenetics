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

    let index = ~~((distanceFromTop+(window.innerHeight/2.2))/window.innerHeight) + 1

    console.log(window.innerWidth);
    let pos;
    let ppos;
    if(index > 1 && index <=5){
      ppos = document.querySelector(`.highlight`).classList.remove('highlight')
      pos = document.querySelector(`.nav-item:nth-child(${index-1})`)
      if(pos) {
        pos.classList.add('highlight')
      }
    } 

    

    if(index === 1 || window.innerWidth < 1400) {
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
          <a href='#reflection'>Reflection</a>
          </div>
      </li>

        <li class="nav-item highlight">
          <div className='chu'>
          <a href='#software-testing'>Software Testing</a>
          </div>
        </li>

        <li class="nav-item">
        <div className='chu'>
          <a href='#frontend-dev'>Frontend Development</a>
        </div>
      </li>

      <li class="nav-item">
      <div className='chu'>
          <a href='#bugfix'>Bug Fixing</a>
          </div>
      </li>

      

      
      </ul>
    </nav>
  );
}

export default SideBar;
