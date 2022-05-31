import React from 'react'
import { Avatar } from '@mui/material'


const BlogPost1 = () => {
  return (
    <div className='blogPost__container'>
  
      <div className='blogPost__top'>
        <div className='top'>
          <Avatar src='https://lh3.googleusercontent.com/a-/AOh14GigQTiOzvu9lYHriPUA8bxzBjMta-9XRYt7uoxa=s96-c' />
        </div>
        <div className='top__info'>
          <div>Phongsavanh "Eddy" Mongkhonvilay</div>
          <div>April 4th, 2022</div>
        </div>
      </div>
      <hr />
      <div className='blogPost__middle'>
        <div className='middle__title'>
          <h1>My First Blog Post</h1>
        </div>

        <div className='middle__pTitle'>
          <h2>What is in a name?</h2>{' '}
        </div>

        <div className='middle__p'>
          <p>
            We know how the code we write works, we understand it, we don’t need
            comments, it’s obvious, of course, we wrote it. This is what we all
            think and its true – well today its true, but tomorrow, next week,
            next year – it’s not likely to be so true. And do others understand
            the way you code? Is the code obvious to the new team member that
            must maintain your code? Will you be spending hours explain
            something that should be obvious or fixing errors made by others
            because they didn’t understand your ‘obvious’ code? We hope that
            this situation never occurs but it does. This why clean code it so
            important. Making your code as clean as possible will improve its
            quality so that others will understand it intuitively, reducing the
            possibility of errors and improving the quality of Maintainance. In
            this article, I will talk about only one aspect of clean code,
            variables. It is structured in short paragraphs under topical
            headings.
          </p>
        </div>

        <div className='middle__pTitle'>
          <h2>Use intention revealing name</h2>{' '}
        </div>

        <div className='middle__p'>
          <p>
            The variable name should reveal the intention of the programmer. It
            should be obvious what the programmer intended that the variable is
            used for. Don’t refer to an object that models an employee using the
            variable name e. Call it what it is: an employee. Likewise, when
            referring to values such as integers use intention revealing name
            for example use int highestScore instead of int i.
          </p>
        </div>
      </div>
      <div className='blogPost__bottom'>
        <hr />
      </div>
    </div>
  )
}

export default BlogPost1