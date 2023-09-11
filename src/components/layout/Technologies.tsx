import React from "react";
import Image from "next/image";
import js from "../../../public/javascript-js.com.svg";
import node from "../../../public/nodejs-seeklogo.com.svg";
import react from "../../../public/react-seeklogo.com.svg";
import next from "../../../public/next-js-seeklogo.com.svg";
import java from "../../../public/java-seeklogo.com.svg";
import ts from "../../../public/typescript-seeklogo.com.svg";
import py from "../../../public/python-seeklogo.com.svg";
import dj from "../../../public/django-seeklogo.com.svg";
import html from "../../../public/html5-without-wordmark-color.svg";
import css from "../../../public/css-3-seeklogo.com.svg";
import twd from "../../../public/tailwind-css-seeklogo.com.svg";
import db from "../../../public/mongodb-seeklogo.com.svg";
import github from '../../../public/github-seeklogo.com.svg'
import git from '../../../public/git-seeklogo.com.svg'
import mysql from '../../../public/mysql-seeklogo.com.svg'
import npm from '../../../public/npm-node-package-manager.svg' 
import php from '../../../public/php-seeklogo.com.svg'


function Technologies() {
  return (
    <div className="flex justify-center items-center  text-white h-full w-full">
      <div className="w-[65%] flex flex-col h-[90%] items-center mt-52">
        <h2 className="text-6xl">Technologies<span className='text-[#D0BFFF]'>.</span></h2>
        <div className="relative w-full h-[90%] mt-32 flex justify-between gap-7 flex-wrap px-52 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#D0BFFF]/[0.32]">
          <Image src={js} alt="" height="150" width="150" />
          <Image src={node} alt="" height="150" width="150" />
          <Image src={react} alt="" height="150" width="150" />
          <div className="h-[150px]  w-[150px] rounded-full relative bg-white border-2 border-black  flex justify-center top-[1.2rem] items-center">
            <Image
              src={next}
              alt=""
              height="150"
              width="150"
              className="absolute "
            />
          </div>
          <Image src={java} alt="" height="150" width="150" />
          <Image src={ts} alt="" height="150" width="150" />
          <Image src={py} alt="" height="150" width="150" />
          <Image src={dj} alt="" height="150" width="150" />
          <Image src={html} alt="" height="150" width="150" />
          <Image src={twd} alt="" height="150" width="150" />
          <Image src={css} alt="" height="120" width="120" />
          <Image src={db} alt="" height="150" width="150" className=""/>
        </div>
        <Image src={github} alt="" height="150" width="150" className="absolute -bottom-[700px] left-[250px] -z-10"/>
        <Image src={git} alt="" height="150" width="150" className="absolute -bottom-[700px] left-[600px] -z-10"/>
        <Image src={mysql} alt="" height="150" width="150" className="absolute -bottom-[700px] left-[350px] -z-10"/>
        <Image src={npm} alt="" height="150" width="150" className="absolute -bottom-[700px] left-[750px] -z-10"/>
        <Image src={php} alt="" height="150" width="150" className="absolute -bottom-[700px] left-[250px] -z-10"/>
      </div>
    </div>
  );
}

export default Technologies;
