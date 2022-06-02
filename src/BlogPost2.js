import { Avatar } from '@mui/material'
import React from 'react'
import './BlogPost.css'

function BlogPost2() {
  return (
    <div className='blogPost__container'>
      <div className='blogPost__top'>
        <div className='top'>
          <Avatar src='https://lh3.googleusercontent.com/a-/AOh14GigQTiOzvu9lYHriPUA8bxzBjMta-9XRYt7uoxa=s96-c' />
        </div>
        <div className='top__info'>
          <div>Phongsavanh "Eddy" Mongkhonvilay</div>
          <div>May 31sh, 2022</div>
        </div>
      </div>
      <hr />
      <div className='blogPost__middle'>
        <div className='middle__title'>
          <h1>Using python to sort two pdf files into one.</h1>
        </div>

        <h2>Reg Expressions</h2>

        <div className=''>
          <p>
            This program will help to sort the pages in a PDF, by a plan number,
            the plan number is a 7 digit number.
          </p>
          <img src={require('./blogpost2_1.png')} alt='' />
          <p>
            This is an example of the order in which the pdfs should be sorted.
          </p>
          <img src={require('./blogpost2_2.png')} alt='' />

          <p>
            The first plan of action is to find a way to extract that <strong>production
            plan number</strong>  and also, we will need the <strong>page number</strong> , this is where
            the use of Regular Expressions come in.
          </p>
          <img src={require('./blogpost2_3.png')} alt='' />
        </div>

        <h2>PdfPlumber</h2>

        <div className=''>
          <p>
            In order to extract the text in the PDF pages, we will need the help
            of PdfPlumber, this is a free and open-source PDF library capable of
            splitting, merging, cropping, and transforming the pages of PDF
            files.
          </p>
          <p>This is the code used to extract the text</p>
          <img src={require('./blogpost2_4.png')} alt='' />
          <p>
            This code is used to extract the <strong>page numbers and plan numbers</strong>  from
            2 different pdf files, <strong>each 124 pages long</strong> , which are horribly
            unsorted. The end goal is to create a new PDF file paired by plan
            number and then sorted by the order we are given.
          </p>
          <p>
            In order to do this successfully we must pass the pdf files through
            PdfPlumber and loop through all the text in the pages.
          </p>
          <p>
            Then, inside the loop we pick out the plan number and page number
            with the regular expressions
          </p>
          <h2>Dictionaries</h2>
          <p>
            When looping through the lines of text in the PDF, page number is
            found before plan number.
          </p>
          <p>
            if the page number if found, we append to the dictionary (lines),
            with page number and plan number, as so, key:value pair
            'page':'plan'.
          </p>
          <p>After appending to the dictionary lines, this is the result</p>
          <img src={require('./blogpost2_6.png')} alt='' />
          <p>
            Now, how do we use this data that we extracted to sort the pdf pages
            into the order we need?
          </p>
          <p>This is where a problem occurred.</p>
          <p>
            I solved this problem by switching the key:value pairs in the
            dictionaries with this code, now it will read 'plan number':'page
            number'.
          </p>
          <p>
            this is more useful because in the end i will combine these two
            dictionaries as so: <strong>'plan number': [page number, page number]</strong> 
          </p>
          <p>
            This will help to organize the pdfs by plan number, because of the
            way dictionaries work, any duplicates of plan number will be
            combined.
          </p>
          <h2>
            Flipping the key:value pairs of the dictionaries lines and lines2,
            and then combining the dictionaries
          </h2>
          <img src={require('./blogpost2_7.png')} alt='' />
          <p>
            Here in this code we make a new dictionary with the flipped values.
          </p>
          <p>
            We then combine the two dictionaries into finalline. which results
            in this data.
          </p>
          <img src={require('./blogpost2_8.png')} alt='' />
          <p>just as we wanted. </p>
          <p> <strong>'plan number': [page number, page number]</strong> </p>
          <h2>Now we print in the order we need</h2>
          <p>the order in which we need, i stored in a txt file.</p>
          <p>
            which is: 1814014 1814022 1814022 1814022 1814031 1814049 1821821
            1814057 1837136 1778594 1833661 1833670 1833688 1816870 1816888
            1817531 1817549 1817557 1817565 1815447 1816896 1815447 1816378
            1815121 1815130 1816167 1816386 1815463 1824773 1814170 1814188
            1814196 1814209 1814217 1814225 1814233 1814241 1814250 1814268
            1814217 1835018 1814276 1814284 1815480 1815498 1816298 1824651
            1824669 1824677 1824685 1815519 1815501 1824693 1815535 1815543
            1815551 1816319 1816327 1815560 1816351 1816360 1822049 1824731
            1819341 1822701 1822057 1822065 1824706 1824714 1824722 1815578
            1815586 1815594 1815607 1815615 1814268 1840503 1824749 1824757
            1824765 1814153 1822778 1798675 1798675 1816706 1798632 1798632
            1816301 1814882 1835237 1801985 1801951 1806313 1825400 1811884
            1825418 1819350 1815105 1815113 1838462 1834971 1813644 1813652
            1813661 1814989 1833602 1824597 1824597 1837662 1839684 1825101
            1824600 1824600 22326749 1824634 1816335 1816343 1816343 1816183
            1816141 1816191 1816159 1824642 1825119 1834980 1834998 1824626
            22367161 1818841 1839676 1816837 1825371 1785866 1808781 1816853
            1816861 1815623
          </p>
          <p>
            As you can see, the data we have is unsorted, and some of the values
            in the given order is not present.
          </p>
          <p>
            I overcame the invalid values by using a <strong>try catch block</strong> , which
            helped to remove those pages and values before we started appending
            the pdf pages in order.
          </p>
          <img src={require('./blogpost2_9.png')} alt='' />
          <p>In this code i append the plan numbers in the txt file by the variable name planorder, to an array called newcans=[]</p>
          <h2>PyPDF2</h2>
          <p>I use PdfFileReader and PdfFileWriter from PyPDF2 to help me create one sorted pdf</p>
          <p>i use a for loop to iterate through the newcans array which contains all the plan numbers in order</p>
          <p>In this array i use the final dictionary i made, which is in the format: 'plan number': [page number, page number]</p>
          <p>Inside the forloop i <strong>try </strong>find the first page, and second page, write to the new pdf i am creating, and loop again for all the items in newcans. </p>
          <p>This creates a newly created PDF with the sorted plan numbers we need!</p>
          <p><strong>Thanks for reading!</strong></p>
        </div>
      </div>
      <div className='blogPost__bottom'>
        <hr />
      </div>
    </div>
  )
}

export default BlogPost2
