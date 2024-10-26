import realestate from '../assets/realestate.webp'
import mediumclone from '../assets/mediumclone.png'

export default function Projects() {
  return (
    <div id="projects" className="text-white font-mono mt-12">
        <div className="text-6xl text-center">
            Projects
        </div>
        <div className="flex flex-wrap space-x-24 justify-center mt-20">
          <div className="border rounded-lg h-[640px] w-[400px] shadow-lg my-16 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <div className="border rounded-lg mb-6 ">
              <div className="flex font-mono text-2xl text-white pt-8 pl-6 mb-8 justify-center">
                Real Estate App
              </div>
            </div>

            <div className="mx-auto rounded-lg overflow-hidden h-24 w-24">
              <img src={realestate} alt="Company Logo" className="rounded-full" />
            </div>
            <ul className="text-white font-mono mt-10 list-disc ml-8 space-y-4">
              <li>
              Developed a comprehensive real estate platform where users can sign up, log in, and manage their profiles.
              </li>
              <li>
              Enabled users to create, view, and manage property listings, enhancing the platform's interactivity and
              usability.
              </li>
              <li>
              Implemented search functionality, allowing users to filter and find properties based on their specific
              needs.
              </li>
              <li>
                <b>Techstack</b>: React, Express, Nodejs, MongoDb
              </li>
            </ul>
          </div>
          <div className="border rounded-lg h-[640px] w-[400px] shadow-lg my-16 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <div className="border rounded-lg mb-6 ">
              <div className="flex font-mono text-2xl text-white pt-8 pl-6 mb-8 justify-center">
                Medium Clone
              </div>
            </div>
            <div className="mx-auto rounded-lg overflow-hidden h-[110px] w-[150px]">
              <img src={mediumclone} alt="Company Logo" className="rounded-full" />
            </div>
            <ul className="text-white font-mono mt-8 list-disc ml-8 space-y-4">
              <li>
              Developed a Medium clone with a serverless backend using Cloudflare Workers, implementing scalable and efficient cloud-based solutions.
              </li>
              <li>
              Integrated user authentication features, including login and signup functionalities, to enhance security and user experience.
              </li>
              <li>
              Enabled users to upload and update their blogs, providing a dynamic and interactive platform
              </li>
              <li>
                <b>Techstack</b>: React, Hono, Nodejs, Postgres, Prisma, Typescript
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
