import weblogo from '../assets/weblogo.png'


export default function NavBar() {
    return (
      <div className="flex justify-between items-center font-mono rounded-full h-14">
        {/* <div className="text-lg font-bold text-white">Website Icon</div> */}
        <a href="/" className="text-white h-10 w-[120px] ml-2">
          <img src={weblogo} alt=''></img>
        </a>
        <div className="flex space-x-8 text-white p-4">
          <div className="relative group">
            <a href="#skills" className="text-lg">Skills</a>
            <div className="absolute left-0 -bottom-1 w-full h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100"></div>
          </div>
          <div className="relative group">
            <a href="#workexp" className="text-lg">Work Experience</a>
            <div className="absolute left-0 -bottom-1 w-full h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100"></div>
          </div>
          <div className="relative group">
            <a href="#education" className="text-lg">Education</a>
            <div className="absolute left-0 -bottom-1 w-full h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100"></div>
          </div>
          <div className="relative group">
            <a href="#projects" className="text-lg">Projects</a>
            <div className="absolute left-0 -bottom-1 w-full h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100"></div>
          </div>
          <div className="relative group">
            <a href="#contactme" className="text-lg">Contact Me</a>
            <div className="absolute left-0 -bottom-1 w-full h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100"></div>
          </div>
          <div className="relative group">
            <a href="" className="text-lg">Dark Mode</a>
            <div className="absolute left-0 -bottom-1 w-full h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100"></div>
          </div>
        </div>
      </div>
    );
  }
  