import React from 'react'
import './Projects.css'
import project1 from './project1.mp4'
import project2 from "./project2.mp4";
import { Link } from 'react-router-dom';
import HoverVideoPlayer from 'react-hover-video-player';
import GitHubIcon from '@mui/icons-material/GitHub'



function Projects() {
  return (
    <div className='projects'>
      <h1>Projects </h1>
      <div className='projects_container'>
        <a
          href="https://github.com/pmongkho/ReactFirebasePortfolio"
          target="_blank"
        > 
       <div className="project_card">
            <HoverVideoPlayer
              videoSrc={project1}
              hoverOverlay={
                <div className="hover-overlay">
                  <div className="">
                    <h1>Portfolio</h1>
                    <p>
                      made with React, Firebase v9
                      </p>
                      <p>github.com/pmongkho</p>
                  </div>
                </div>
              }
            />
          </div>
        </a>

        <a
          href="https://github.com/pmongkho/ReactFirebasePortfolio"
          target="_blank"
        >
          <div className="project_card">
            <HoverVideoPlayer
              videoSrc={project2}
              hoverOverlay={
                <div className="hover-overlay">
                  <div className="">
                    <h1>Tattoo booking app</h1>
                    <p>
                      made with React
                    </p> <p>github.com/pmongkho</p>
                  </div>
                </div>
              }
            />
          </div> 
        </a> 
        <div className="projects-icon"> </div>
       
      </div>
    </div>
  )
}

export default Projects