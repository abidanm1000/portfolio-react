import React from 'react'

export default function Project({project}) {
    return (
        <a href={project.link} target="_blank" id='project-link'>
            <div className='project' style={{backgroundImage: `url(${project.cover})`}}>
                <div id='project-description'>
                    <p>{project.title}</p>
                </div>
            </div>
        </a>
    )
}
  
