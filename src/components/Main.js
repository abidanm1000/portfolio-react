import React from 'react'

export default function Main({theme}) {
  return (
    <div class="main">
        <div class="content" id='projects'>
            <h1>projects</h1>
            <ul>
            <li ><a href="https://dreamy-shaw-f5a38c.netlify.app/" target="_blank" className={`${theme}`}>Profile Card</a></li>
            <li ><a href="https://hungry-pike-2dfe9a.netlify.app/" target="_blank" className={`${theme}`}>Tip Calculator</a></li>
            <li ><a href="https://abidanm1000.github.io/" target="_blank" className={`${theme}`}>First Portfolio</a></li>
            <li ><a href="https://sad-wing-32775a.netlify.app/" target="_blank" className={`${theme}`}>BeatboxJS</a></li>
            <li ><a href="https://flamboyant-thompson-17ed22.netlify.app/" target="_blank" className={`${theme}`}>Red Bull</a></li>
            <li ><a href="https://github.com/abidanm1000/CryptoPunks" target="_blank" className={`${theme}`}>Crypto Punks</a></li>
            </ul>
            <a href="https://github.com/abidanm1000" target="_blank" className={`${theme}`}><b>more on github</b></a>
        </div>
        <div class="content" id='about'>
            <h1>about</h1>
            <p>My interest in web development has been growing for about 5 years now since writing this. My coding journey started in Fresno City College and since then I've been honing my skills to land a job as a Web Developer. You'll find other details of my coding career on this personal portfolio.</p>
        </div>
        <div class="content" id='experience'>
            <h1>experience</h1>
            <h3>programming languages:</h3>
            <p>These are the languages I've been exposed to over the years in order</p>
            <ol>
                <li>C++</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Markdown</li>
                <li>Python</li>
                <li>Django</li>
                <li>React.js</li>
                <li>jQuery</li>
            </ol>
            <h3>education:</h3>
            <ul>
                <li>Clever Programmer</li>
                <li>Fresno Pacific (FPU)</li>
                <li>Fresno City College</li>
                <li>Edison High School</li>
            </ul>
        </div>
        <div class="content" id='hobbies'>
            <h1>hobbies</h1>
            <h3>Current:</h3>
            <ul>
                <li>⚛️ Coding</li>
                <li>🎮 Gaming</li>
                <li>🎧 Music</li>
                <li>🍿 Movies</li>
                <li>✈️ Traveling</li>
            </ul>
            <h3>Other activities:</h3>
            <ul>
                <li>🛸 FPV Drone Racing</li>
                <li>👊 Boxing / Karate</li>
                <li>🔫 Paintball</li>
                <li>🏎️ Car Mod Tuning</li>
                <li>🚀 Virtual Reality Gaming</li>
            </ul>
        </div>
        <div class="content" id='contact'>
            <h1>contact</h1>
            <div id='icons'>
                <a href="mailto:abidanmtz@gmail.com" target="_blank" className={`${theme}`}><i class="fa fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/abidanmartinez/" target="_blank" className={`${theme}`}><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/abidanm1000" target="_blank" className={`${theme}`}><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
  )
}
