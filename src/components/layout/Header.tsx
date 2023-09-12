"use client"

import React from "react";
import { FaRegFileCode } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Button from "../Button";

function Header() {
  return (
    <header className="w-full relative h-20 flex items-center justify-center">
      <div className="flex fixed justify-between text-white text-sm w-[65%] h-14 py-2 px-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#FFFFFF]/[0.20] z-10">
        <div className="flex items-center gap-1">
          <FaRegFileCode />
          <span>StivenDev</span>
        </div>
        <ul className="flex justify-around items-center w-[300px]">
          <li className="cursor-pointer hover:text-slate-300"><a href="#about">About</a></li>
          <li className="cursor-pointer hover:text-slate-300"><a href="#technologies">Technologies</a></li>
          <li className="cursor-pointer hover:text-slate-300"><a href="#projects">Projects</a></li>
          <li className="cursor-pointer hover:text-slate-300"><a href="#contac">Contac</a></li>
        </ul>
        <div className="flex items-center text-lg gap-1 border rounded-md py-2 px-5 hover:text-black hover:bg-slate-50 cursor-pointer transition-all ease-in duration-200">
          <a href="../../../public/docs/StivenDelgado.pdf" download><button>Descargar PDF</button></a>
          
            <HiOutlineDocumentDownload />
        </div>
      </div>
    </header>
  );
}

export default Header;
