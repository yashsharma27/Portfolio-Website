export default function Skills() {
    return (
      <div id="skills">
        <div className="text-center text-white font-mono text-6xl my-12">
          Skills
        </div>
        <div className="flex flex-wrap items-center justify-center pt-10 font-mono m-4 p-4">
          {[
            "C++",
            "Python",
            "Javascript",
            "Typescript",
            "Tailwind CSS",
            "ExpressJs",
            "MongoDb",
            "SQL",
            "Postgres",
            "Prisma",
            "Nextjs",
            "Data Structures",
            "Algorithm",
            "ReactJs",
            "Pandas",
            "OOPs",
            "Django",
            "Nodejs",
            "Docker",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-violet-300 h-10 w-40 flex items-center justify-center rounded-md leading-tight m-4
              transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-black"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  }
  