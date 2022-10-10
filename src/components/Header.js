import React from 'react'

function toggle() {
  let myLinks = document.getElementById("myLinks");
  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "block";
  }
}



export default function Header({switchTheme,switchIcon, theme}) {
  return (
    <div id="homepage">
        <p>hello, i'm</p>
        <div className="gradient">
            <img src="./profile-image.jpg" alt="profile image of Abi"/>
        </div>
        <h1>abi</h1>
        <nav>
            <ul>
                <li className='nav-item'><img src={switchIcon} id='darkmode-switch' onClick={switchTheme}/></li>
                <li className='nav-item'><a href='#homepage' className={`${theme}`}>Home</a></li>
                <li className='nav-item'><a href='#projects' className={`${theme}`}>Projects</a></li>
                <li className='nav-item'><a href='#about' className={`${theme}`}>About</a></li>
                <li className='nav-item'><a href='#experience' className={`${theme}`}>Experience</a></li>
                <li className='nav-item'><a href='#hobbies' className={`${theme}`}>Hobbies</a></li>
                <li className='nav-item'><a href='#contact' className={`${theme}`}>Contact</a></li>
                <li className='nav-item'><a href="./resume.pdf" target="_blank" className={`${theme}`}>Resume</a></li>
            </ul>
        </nav>
        <div className="topnav">
      
            <div id="myLinks">
              <a href='#homepage' className={`${theme}`}>Home</a>  
              <a href='#projects' className={`${theme}`}>Projects</a>
              <a href='#about' className={`${theme}`}>About</a>
              <a href='#experience' className={`${theme}`}>Experience</a>
              <a href='#hobbies' className={`${theme}`}>Hobbies</a>
              <a href='#contact' className={`${theme}`}>Contact</a>
              <a href="./resume.pdf" target="_blank" className={`${theme}`}>Resume</a>
            </div>
            
            <a className={`icon ${theme}`} onClick={toggle}>
              <i className="fa fa-bars"></i>
            </a>
            <br></br>
            <img src={switchIcon} id='darkmode-switch' onClick={switchTheme}/>
          </div>
    </div>
  )
}
