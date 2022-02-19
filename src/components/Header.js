import React from 'react'

function toggle() {
  let myLinks = document.getElementById("myLinks");
  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "block";
  }
}

export default function Header() {
  return (
    <div id="homepage">
        <p>hello, i'm</p>
        <div className="gradient">
            <img src="./profile-image.jpg" alt="profile image of Abi"/>
        </div>
        <h1>abi</h1>
        <nav>
            <ul>
                <li className='nav-item'><a href='#homepage'>Home</a></li>
                <li className='nav-item'><a href='#projects'>Projects</a></li>
                <li className='nav-item'><a href='#about'>About</a></li>
                <li className='nav-item'><a href='#experience'>Experience</a></li>
                <li className='nav-item'><a href='#hobbies'>Hobbies</a></li>
                <li className='nav-item'><a href='#contact'>Contact</a></li>
                <li className='nav-item'><a href="./resume.pdf" target="_blank">Resume</a></li>
            </ul>
        </nav>
        <div class="topnav">
      
            <div id="myLinks">
              <a href='#homepage'>Home</a>  
              <a href='#projects'>Projects</a>
              <a href='#about'>About</a>
              <a href='#experience'>Experience</a>
              <a href='#hobbies'>Hobbies</a>
              <a href='#contact'>Contact</a>
              <a href="./resume.pdf" target="_blank">Resume</a>
            </div>
            
            <a className="icon" onClick={toggle}>
              <i class="fa fa-bars"></i>
            </a>
          </div>
    </div>
  )
}
