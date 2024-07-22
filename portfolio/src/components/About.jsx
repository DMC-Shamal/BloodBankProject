import React from 'react';

function About() {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div>
        <h1 className='text-4xl font-bold mb-10 text-center'>About</h1>
        <p className='text-lg mb-6 leading-relaxed'>
          Hello, I'm Shamal, a passionate full stack developer with a keen eye 
          for MERN Stack. With a background in IT, I strive to create impactful 
          and visually stunning software solutions that leave a lasting impression.
        </p>

        <h2 className='text-green-600 font-semibold text-2xl mb-4'>
          Education & Training
        </h2>
        <ul className='space-y-3 mb-8'>
          <li className='flex items-start'>
            <input type="radio" className="mt-1" readOnly checked />
            <span className='ml-3'>
              PG Diploma in Mobile Computing<br />
              CDAC- Sunbeam Infotech Private Limited (Pune).<br />
              09/2023 - 02/2024
            </span>
          </li>
          <li className='flex items-start'>
            <input type="radio" className="mt-1" readOnly checked />
            <span className='ml-3'>
              MSc in Computer Science<br />
              Vivekanand Institute of Advanced Studies in Management Science and Communication College, Aurangabad.<br />
              2020 - 2022
            </span>
          </li>
          <li className='flex items-start'>
            <input type="radio" className="mt-1" readOnly checked />
            <span className='ml-3'>
              BSc in Computer Science<br />
              Shri Shivaji College, Parbhani.<br />
              2020
            </span>
          </li>
        </ul>

        <h2 className='text-green-600 font-semibold text-2xl mb-4'>
          Skills and Expertise
        </h2>
        <p className='text-lg mb-8 leading-relaxed'>
          I am skilled in Java, Android, iOS, MySQL, Spring Boot, Node.js, React.js, HTML, CSS, JavaScript, Bootstrap, and Web API. I have experience in developing applications, writing complex SQL queries, and working with various programming languages.
        </p>

        <h2 className='text-green-600 font-semibold text-2xl mb-4'>
          Certifications
        </h2>
        <ul className='space-y-3'>
          <li className='flex items-start'>
            <input type="radio" className="mt-1" readOnly checked />
            <span className='ml-3'>
              Programming in C, C++<br />
              from One Dot Education<br />
              03/2022 - 06/2022
            </span>
          </li>
          <li className='flex items-start'>
            <input type="radio" className="mt-1" readOnly checked />
            <span className='ml-3'>
              Java Programming<br />
              from One Dot Education<br />
              06/2022 - 09/2022
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
