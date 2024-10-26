import screen2logo from '../assets/screen2logo.png'

export default function WhatIDo() {
  return (
    <div className="relative text-white font-mono p-8 ml-12 flex">
        <div className="flex-1 flex justify-center">
            <img src={screen2logo} alt="Animation" className="w-96 h-auto" />
        <div className="flex-1 ml-8">
            <div className='text-6xl'>
                What I do
            </div>
            <ul className='pt-4 text-xl list-disc space-y-4'>
                <li>
                I am a passionate software developer with a strong focus on fullstack engineering.
                </li>
                <li>
                With a solid foundation in C++, TypeScript, Reactjs, Django, Nodejs,
                I am well-versed in various fullstack technologies and have a keen interest in continuously 
                improving my skills.
                </li>
                <li>
                I am currently seeking opportunities to further my career as a fullstack/backend software engineer, 
                where I can contribute my technical expertise and collaborate on innovative projects 
                that drive impact.
                </li>
            </ul>
            <div >
             
            </div>
        </div>
    </div>
    </div>
  )
}
