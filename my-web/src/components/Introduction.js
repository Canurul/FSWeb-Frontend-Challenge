import { FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../logos/mainPic.PNG";
import logo2 from "../logos/dayiLogo.jpeg";

export default function Introduction() {
  return (
    <div
      className="introduction flex flex-col md:flex-row items-center justify-between px-5 py-10 md:py-0"
      style={{ margin: 0 }}
    >
      <div className="text-center md:text-left mb-6 md:mb-0 md:mr-6 w-full md:w-auto">
        <img
          src={logo2}
          alt="logo2"
          className="w-16 h-16 rounded-full mb-4 md:mb-0"
        />
        <div>
          <h1 className="text-5xl mb-2 font-semibold Open_Sans">
            Hi! My name is Can<span>👋</span>
          </h1>
          <p className="text-5xl font-light mb-2 leading-normal Open_Sans">
            I am a full-stack developer. <br />I can craft solid and scalable
            frontend products. Let's meet!
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/ömer-can-urul-266436167/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Canurul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <img
        src={logo}
        alt="logo"
        className="w-auto h-auto object-contain md:w-80 md:h-80 rounded-lg"
      />
    </div>
  );
}