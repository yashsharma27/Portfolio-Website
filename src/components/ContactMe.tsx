import Yash from '../assets/Yash.jpeg'
import linkedinlogo from '../assets/linkedinlogo.png'
import xlogo from '../assets/xlogo.avif'

export default function ContactMe() {
  return (
    <div id="contactme" className="relative text-white font-mono mt-12">
        <div className="text-6xl text-center">
            Reach Out to Me!
        </div>
        <div className='flex mt-20 mb-10 justify-start'>
          <div className='h-[200px] w-[200px] rounded-full ml-20 mb-10'>
            <img src={Yash} alt="" className='rounded-full'></img>
          </div>
          <div className='ml-20 space-y-4'>
              <h1 className='text-2xl'>
              Yash Sharma
              </h1>
              <h2 className='opacity-60'>
                Backend Software Developer @Decision Point Analytics
              </h2>
              <h2 className='opacity-60'>
                📍 Gurgaon, India
              </h2>
              <h2 className='font-extrabold text-xl'>
                Open For Oportunities : Yes
              </h2>
            <div className='flex space-x-3'>
                <a href="https://www.linkedin.com/in/yash-sharma-8851a817a/">
                    <img src={linkedinlogo} alt="LinkedIn"></img>
                </a>
                <a href="https://x.com/YashSha17469975">
                    <img src={xlogo} alt="Xlogo" className='h-10 w-10 mt-1 rounded-md'></img>
                </a>
            </div>
          </div>
        </div>
    </div>
  )
}
