import React from 'react'

export default function Projects() {
  const projects = [
    {
      name: 'QuizoSphere',
      img: '/Screenshot 2025-01-25 011708.png',
      Technologies:'ReactJS+Tailwind+Firebase',
      Link:'https://featured-quizoo.vercel.app/'
    },
    {
      name: 'Admin Panel',
      img: '/Screenshot 2025-01-20 224024.png',
      Technologies:'NEXTJS+Tailwind+ExpressJS+MongoDB',
      Link:'https://admin-panel-in-nextjs.vercel.app/'

    },
    {
      name: 'Regex Pattern Builder',
      img: '/Screenshot 2024-09-05 175752 copy.png',
      Technologies:'Advance JavaScipt',
      Link:'#'

    },
    {
      name: 'Blogineer',
      img: '/blogg.png',
      Technologies:'React+Tailwind+Firebase',
      Link:'https://blogineer.vercel.app/'

    },
   
  ]
  return (
    <div className='min-h-screen text-white text-center text-[40px] font-sans max-w-[100%] m-5' id='projects'>
      <h2 className='font-bold'>My Projects</h2>
      <div className="p-10 max-w-[1400px] mx-auto">
        <div className="flex flex-wrap gap-[50px] items-center justify-center">
          {
            projects.map((project,index) => {
              return (
                <a key={index} href={project.Link} target='_blank' className='md:basis-[30%] basis-[100%] max-w-[100%] shadow-xl border p-3 border-orange-200 cursor-pointer group  overflow-hidden '>
                  <img src={project.img} className="group-hover:scale-[1.5] duration-[1s] "></img>
                  <span className='md:text-[25px] text-lg '>{project.name}</span>
                </a>
              )
            })
          }

        </div>


      </div>
    </div>
  )
}
