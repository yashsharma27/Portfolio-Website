import nitklogo from '../assets/nitklogo.webp'

export default function Education() {
  return (
    <div id="education" className="relative text-white font-mono mt-12">
        <div className="text-center text-6xl">Education</div>
        <div className="group relative">
            <div className="flex justify-start ml-10 mt-20 items-center ">
                <div className="m-5">
                    <img src={nitklogo} alt="College Logo" className="pl-7" />
                </div>
                <div className="space-y-3 ml-10">
                    <h1 className="text-3xl">National Institute Of Technology, Kurukshetra</h1>
                    <h2 className="text-2xl opacity-75">Bachelors of Technology in Mechanical Engineering</h2>
                    <h3 className="text-xl opacity-50">August 2019 - June 2023</h3>
                </div>
            </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] origin-left bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
    </div>
  )
}
