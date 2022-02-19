import React from 'react'

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
            </ul>
        </nav>
    </div>
  )
}
