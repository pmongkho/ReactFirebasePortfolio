import React from 'react'
import './Projects.css'
import project1 from './videos/portfolio-app.mp4'
import project2 from './videos/google-translate.mp4'
import project3 from './videos/sudoku-solver.mp4'
import project4 from './videos/tattoo-app.mp4'
import { Link } from 'react-router-dom'
import HoverVideoPlayer from 'react-hover-video-player'
import GitHubIcon from '@mui/icons-material/GitHub'

function Projects() {
  return (
    <div className='projects'>
      <h1>
        Projects <GitHubIcon fontSize='50' />
      </h1>
      <div className='projects_container'>
        <a
          href='https://github.com/pmongkho/ReactFirebasePortfolio'
          target='_blank'
        >
          <div className='project_card'>
            <HoverVideoPlayer
              videoSrc={project1}
              hoverOverlay={
                <div className='hover-overlay'>
                  <div className=''>
                    <h2>Portfolio App</h2>
                    <p>REACT, FIREBASE V9</p>
                    <p>https://github.com/pmongkho/ReactFirebasePortfolio</p>
                  </div>
                </div>
              }
            />
          </div>
        </a>

        <a
          href='https://github.com/pmongkho/GOOGLE-TRANSLATE-REACT-AXIOS-EXPRESS'
          target='_blank'
        >
          <div className='project_card'>
            <HoverVideoPlayer
              style={{ color: 'black' }}
              videoSrc={project2}
              hoverOverlay={
                <div className='hover-overlay'>
                  <div className=''>
                    <h2>Google Translate app</h2>
                    <p>REACT, AXIOS, EXPRESS</p>{' '}
                    <p>
                      https://github.com/pmongkho/GOOGLE-TRANSLATE-REACT-AXIOS-EXPRESS
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </a>

        <a
          href='https://github.com/pmongkho/GOOGLE-TRANSLATE-REACT-AXIOS-EXPRESS'
          target='_blank'
        >
          <div className='project_card'>
            <HoverVideoPlayer
              style={{ color: 'black' }}
              videoSrc={project3}
              hoverOverlay={
                <div className='hover-overlay'>
                  <div className=''>
                    <h2>Sudoku Solver App</h2>
                    <p>JS, AXIOS, EXPRESS, API</p>{' '}
                    <p>
                      https://github.com/pmongkho/GOOGLE-TRANSLATE-REACT-AXIOS-EXPRESS
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </a>

        <a
          href='https://github.com/pmongkho/GOOGLE-TRANSLATE-REACT-AXIOS-EXPRESS'
          target='_blank'
        >
          <div className='project_card'>
            <HoverVideoPlayer
              style={{ color: 'black' }}
              videoSrc={project4}
              hoverOverlay={
                <div className='hover-overlay'>
                  <div className=''>
                    <h2>Tattoo Booking App</h2>
                    <p>REACT</p>{' '}
                    <p>
                      https://github.com/pmongkho/GOOGLE-TRANSLATE-REACT-AXIOS-EXPRESS
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </a>
        <div className='projects-icon'> </div>
      </div>
    </div>
  )
}

export default Projects
