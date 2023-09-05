import React from 'react'
import Project from '../Project'
import nextCrud from '../../../public/projects/next-crud.png'


function Projects() {
  return (
    <div className='text-white h-full w-full mt-52 flex justify-center'>
      <div className='flex flex-col items-center w-[65%] gap-20'>
          <h3 id='projects' className='text-6xl'>
            Projects
          </h3>
          <div className='flex flex-wrap justify-around items-center w-full gap-8' >
            <Project  img={nextCrud}>Name Project</Project>
            <Project  img={nextCrud}>Name Project</Project>
            <Project  img={nextCrud}>Name Project</Project>
            <Project  img={nextCrud}>Name Project</Project>
            <Project  img={nextCrud}>Name Project</Project>
            <Project  img={nextCrud}>Name Project</Project>
          </div>
      </div>
    </div>
  )
}

export default Projects
