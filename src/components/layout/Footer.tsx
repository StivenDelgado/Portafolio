import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

function Footer() {
  return (
    <footer className="w-full h-[100px] flex justify-center ">
      <div className="w-[65%] flex justify-between px-20 items-center text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-1/4">
        <p>&copy; Stiven Delgado</p>
        <div className="flex gap-4 text-4xl">
          <a href="https://github.com/StivenDelgado" className="cursor-pointer hover:text-gray-300" target="_blank">
            <BiLogoGithub />
          </a>
          <a href="https://www.linkedin.com/in/stiven-delgado-b8b2b0272/" className="cursor-pointer hover:text-gray-300" target="_blank">
            <BiLogoLinkedin />
          </a>
        </div>
        <span>2023</span>
      </div>
    </footer>
  );
}

export default Footer;
