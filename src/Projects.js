import React from 'react'
import './Projects.css'
import project1 from './videos/portfolio-app.mp4'
import project2 from './videos/google-translate.mp4'
import project3 from './videos/sudoku-solver.mp4'
import project4 from './videos/tattoo-app.mp4'
import project5 from './videos/tetris-app.mp4'
import project6 from './videos/monday-clone-app.mp4'

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
          target='_blank'>
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
          target='_blank'>
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

        <a href='https://github.com/pmongkho/SUDOKU-SOLVER-API' target='_blank'>
          <div className='project_card'>
            <HoverVideoPlayer
              style={{ color: 'black' }}
              videoSrc={project3}
              hoverOverlay={
                <div className='hover-overlay'>
                  <div className=''>
                    <h2>Sudoku Solver App</h2>
                    <p>JS, AXIOS, EXPRESS, API</p>{' '}
                    <p>https://github.com/pmongkho/SUDOKU-SOLVER-API</p>
                  </div>
                </div>
              }
            />
          </div>
        </a>

        <a
          href='https://github.com/pmongkho/TATTOO-BOOKING-CONSULT-APP'
          target='_blank'>
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
                      https://github.com/pmongkho/TATTOO-BOOKING-CONSULT-APP
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </a>

        <a href='https://github.com/pmongkho/TETRIS-VANILLAJS' target='_blank'>
          <div className='project_card'>
            <HoverVideoPlayer
              style={{ color: 'black' }}
              videoSrc={project5}
              hoverOverlay={
                <div className='hover-overlay'>
                  <div className=''>
                    <h2>Tetris App</h2>
                    <p>Vanilla JS, HTML, CSS</p>{' '}
                    <p>https://github.com/pmongkho/TETRIS-VANILLAJS</p>
                  </div>
                </div>
              }
            />
          </div>
        </a>
        <a
          href='https://github.com/pmongkho/MONDAY-CLONE-REACT-CRUD-ASTRADB'
          target='_blank'>
          <div className='project_card'>

            <HoverVideoPlayer
              style={{ color: 'black', width: '80%' }}
              videoSrc={project6}
            />
            {/* <div className='project-card-info'>
              <h2>Tetris App</h2>
              <p>Vanilla JS, HTML, CSS</p>{' '}
              <p>https://github.com/pmongkho/TETRIS-VANILLAJS</p>
            </div> */}
  
          </div>
        </a>
        <div className='projects-icon'> </div>
      </div>
    </div>
  )
}

export default Projects
