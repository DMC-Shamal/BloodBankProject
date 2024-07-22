import React from 'react';
import javascript from '../assets/htmlcssjs.png'; 
import nodejs from '../assets/nodejs.png';
import express from '../assets/express-logo.png';
import react from '../assets/reactlogo.png';
import android from '../assets/Android_logo.png';
import ios from '../assets/ios.png';
import java from '../assets/Java-Logo.jpg';
import mysql from '../assets/mysql.png';
import springboot from '../assets/spring-boot-logo.png';

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: javascript,
      name: "HTML/CSS & JavaScript",
      description: "HTML defines the structure of your content, CSS determines the style and layout, and JavaScript makes the content interactive"
    },
    {
      id: 2,
      logo: java,
      name: "Java",
      description: "Java is a high-level, class-based, object-oriented programming language, widely-used for coding web applications."
    },
    {
      id: 3,
      logo: springboot,
      name: "SpringBoot",
      description: "Spring Boot makes it easy to create stand-alone, production-grade Spring-based Applications that you can just run"
    },
    {
      id: 4,
      logo: react,
      name: "ReactJs",
      description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc"
    },
    {
      id: 5,
      logo: nodejs,
      name: "NodeJs",
      description: "Node.js is a JavaScript runtime environment. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser." 
    },
    {
      id: 6,
      logo: express,
      name: "ExpressJs",
      description: "Express is a lightweight and flexible routing framework with minimal core features meant to be augmented through the use of Express middleware modules."
    },
    {
      id: 7,
      logo: android,
      name: "Android",
      description: "Android OS is a powerful and versatile platform developed primarily for mobile devices such as smartphones, tablets and other wearable devices."
    },
    {
      id: 8,
      logo: ios,
      name: "iOS",
      description: "Apple iOS is a proprietary mobile operating system that runs on mobile devices such as the iPhone and iPad."
    },
    {
      id: 9,
      logo: mysql,
      name: "MySQL",
      description: "MySQL is an open-source relational database management system.The SQL part of MySQL stands for Structured Query Language."
    }
  ];

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5 my-20 text-center'>Portfolio</h1>
        <span className='underline font-semibold text-center'>Featured projects</span>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-6'>
          {cardItems.map(({ id, logo, name, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 m-4 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
                alt={name}
              />
              <div className="text-center">
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {description}
                </p>
              </div>
              {/* Uncomment if buttons are needed */}
              {/* <div className='px-6 py-4 space-x-3 justify-around'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2'>
                  Video
                </button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2'>
                  Source code
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
