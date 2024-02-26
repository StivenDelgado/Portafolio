import React from 'react'
import Project from '../Project'
import nextCrud from '../../../public/projects/next-crud.png'
import makeup from '../../../public/projects/makeup.png'
import imgToCode from '../../../public/projects/imageToCode.png'
import prospect from '../../../public/projects/prospect.png'
import mercatto from '../../../public/projects/mercatto.png'
import admin from '../../../public/projects/adminProspect.png'


function Projects() {
  return (
    <div className='text-white h-full w-full mt-52 flex justify-center'>
      <div className='flex flex-col items-center w-[65%] gap-20'>
          <h3 id='projects' className='text-6xl'>
            Projects<span className='text-[#D0BFFF]'>.</span>
          </h3>
          <div className='flex flex-wrap justify-around items-center w-full gap-8' >
            <Project  img={nextCrud}>CRUD Nextjs</Project>
            <Project  img={imgToCode}>Url img to code</Project>
            <Project  img={makeup}>Make up lading</Project>
            <Project  img={prospect}>Prospect</Project>
            <Project  img={mercatto}>Mercatto</Project>
            <Project  img={admin}>Admin-Prospect</Project>
          </div>
      </div>
    </div>
  )
}

export default Projects
