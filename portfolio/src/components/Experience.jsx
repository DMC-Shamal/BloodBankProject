import React from 'react';
import htmlLogo from '../assets/HTML5.png'; 
import cssLogo from '../assets/css.png';
import javascriptLogo from '../assets/javascript.png';
import reactLogo from '../assets/reactlogo.png';
import nodejsLogo from '../assets/nodejs.png';
import sql from '../assets/mysql.png';

function Experience() {
  const technologies = [
    { id: 1, name: "HTML", logo: htmlLogo },
    { id: 2, name: "CSS", logo: cssLogo },
    { id: 3, name: "JavaScript", logo: javascriptLogo },
    { id: 4, name: "React", logo: reactLogo },
    { id: 5, name: "Node.js", logo: nodejsLogo },
    { id: 6, name: "MySQL", logo: sql }

  ];

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <h1 className='text-3xl font-bold mb-5 my-20 text-center'>Experience</h1>
      <div className='bg-white shadow-md rounded-lg p-5 mb-6'>
        <h2 className='text-2xl font-semibold mb-3'>Full Stack Development Intern</h2>
        <p className='mb-3 text-green-600 font-semibold text-xl'>Cognifyz Technologies</p>
        <p className='mb-3 text-gray-600'>06/2024 - 07/2024</p>
        <p className='text-gray-700 mb-3'>
        During my full stack developer internship, I developed and deployed a
        responsive web application using HTML, CSS, ReactJS, and NodeJS. I
        implemented dynamic front-end components and seamless backend
        integration to enhance user experience and functionality, gaining valuable
        knowledge and experience in the process.
        </p>
        <div>
          <h3 className='text-xl font-semibold mb-3'>Technologies Used:</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            {technologies.map(({ id, name, logo }) => (
              <div key={id} className='flex flex-col items-center'>
                <img src={logo} alt={name} className='w-16 h-16 mb-2' />
                <p className='text-center'>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
