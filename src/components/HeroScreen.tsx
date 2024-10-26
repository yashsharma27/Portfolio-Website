import logo from '../assets/logo.gif'
import linkedinlogo from '../assets/linkedinlogo.png'
import githublogo from '../assets/githublogo.png'
import leetcodelogo from '../assets/leetcodelogo.png'


const HeroScreen = () => {
    return (
        <div className="relative text-white font-mono p-8 pt-40 ml-12 flex justify-between">
            <div className="ml-12">
                <h1 className="flex text-6xl mb-6">
                    Hi all, I am Yash
                </h1>
                <div className="flex items-center max-w-2xl text-3xl space-y-6">
                    A passionate Full Stack Software Developer 🚀 having experience in 
                    building web applications with TypeScript / React.js / Node.js / Django
                    and some other cool libraries and frameworks.
                </div>
                <div className='flex space-x-4 mt-10'>
                    <a href="https://www.linkedin.com/in/yash-sharma-8851a817a/">
                        <img src={linkedinlogo} alt="LinkedIn"></img>
                    </a>
                    <a href="https://github.com/yashsharma27">
                        <img src={githublogo} alt="LinkedIn"></img>
                    </a>
                    <a href="https://leetcode.com/u/MistriMechanic/">
                        <img src={leetcodelogo} alt="LinkedIn"></img>
                    </a>
                </div>
                
            </div>
            <div className="">
                <img src={logo} alt=""></img>
            </div>
        </div>
      
    );
  };
  
  export default HeroScreen;
  