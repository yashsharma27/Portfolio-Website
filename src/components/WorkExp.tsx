import dplogo from '../assets/dplogo.jpeg';

export default function WorkExp() {
  return (
    <div id='workexp'>
      <div className="text-center text-white font-mono text-6xl my-12">
        Work Experience
      </div>
      <div className="flex justify-center">
        <div className="border rounded-lg h-[600px] w-[400px] shadow-lg my-16 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-black">
          <div className="border rounded-lg mb-6">
            <div className="flex font-mono text-2xl text-white pt-8 pl-6 mb-8">
              Decision Point Analytics
            </div>
          </div>

          <div className="mx-auto rounded-lg overflow-hidden h-24 w-24">
            <img src={dplogo} alt="Company Logo" className="rounded-full" />
          </div>
          <div className="flex text-white text-xl font-mono justify-center mt-4">
            Backend Software Developer
          </div>
          <div className="flex text-white text-xl font-mono justify-center mt-4">
            July 2023 - Present
          </div>
          <ul className="text-white font-mono mt-10 list-disc ml-8 space-y-4">
            <li>
              Developed suite of APIs that facilitated data integration with third-party applications, increasing data
              processing efficiency by 25%
            </li>
            <li>
              Implemented SonarQube for continuous code quality checks, enhancing code maintainability and reducing
              technical debt by 35%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
