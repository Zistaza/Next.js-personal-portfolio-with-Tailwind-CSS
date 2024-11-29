import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "Static Interactive Resume",
    describe: "A Typescript and Css based Interactive Resume that build for allowing users to showcase their skills dynamically.",
    img: "/project 7.jpg",
    tags: ["CSS", "Typescript", "HTML"],
      
    },

    {
      id: 1,
      title: "Editable Resume Builder",
      describe: "An Editable resume builder is a tool that you can use to create a resume that you can edit and update.",
      img: "/project 8.JPG",
      tags: ["CSS", "Typescript", "HTML"],
        
      },

      {
        id: 2,
        title: "Shareable Resume Builder",
        describe: "A shareable resume builder is an online tool that lets you create a resume and share it with others.",
        img: "/project 9.jpg",
        tags: ["CSS", "Typescript", "HTML"],
          
        },

    {
       id: 3,
       title: "Adventure Game",
       describe: "A Typescript based project app for a Thrilling Gaming Adventure.",
       img: "/project 2.jpg",
       tags: ["Javascript", "Typescript", "HTML"],  
       },
       {
        id: 4,
        title: "OOP-My Bank",
        describe: "A banking system by creating classes that represent different aspects of the system,like accounts and customers.",
        img: "/project 5.jpg",
        tags: ["Javascript", "Typescript", "HTML"],
       },
       {
        id: 5,
        title: "ToDo-List App",
        describe: "A to-do-list can be used to help with productivity and time management.",
        img: "/project1.jpg",
        tags: ["Javascript", "Typescript", "HTML"],
       },
       {
        id: 6,
        title: "OOP",
        describe: "A Programming paradigm based project based on the concept of objects, which can contain data and code.",
        img: "/project 4.jpg",
        tags: ["Javascript", "Typescript", "HTML"],
       },
       {
        id: 7,
        title: "Countdown-Timer",
        describe: "A app that counts down from a certain number or date to indicate the beginning or end of an event or offer.",
        img: "/project 6.JPG",
        tags: ["Javascript", "Typescript", "HTML"],
       },
       {
        id: 8,
        title: "Simple Calculator App",
        describe: "This calculator app offers essential features for everyday use.It allows users to perform basic operations.",
        img: "/simple calculator.JPG",
        tags: ["Javascript", "Typescript", "HTML"],
       },


        
    
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32' data-aos="flip-right">
      <Heading title='My Projects' />
      <div className="flex justify-center">
  <a
    rel="noopener noreferrer"
    href="https://github.com/Zistaza"
    target="_blank"
    className="inline-flex items-center px-4 py-2 bg-slate-700 text-white font-semibold rounded hover:bg-yellow-800 transition"
    data-aos="flip-right"
  >
    <span>"Please click here to visit my GitHub profile and see my projects."</span>
  </a>
</div>

 <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      {data.map((el) => (<Card 
      key={el.id}
      title={el.title}
      desc={el.describe}
      img={el.img}
      tags={el.tags}
      />))}
      </div> 
    </div>
  )
}

export default Projects
