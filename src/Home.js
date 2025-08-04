import Home2 from "./Home2";
import { Link } from 'react-router'

function Home() {
  return (
    <>
      <div className="bg-[#FAF4F3] py-20 px-6 text-center">
        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          AI Portfolio Generator
        </h3>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Turn your resume into a stunning <br></br> portfolio website with AI
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Don’t just share your resume — showcase your skills with a beautiful
          website. Our AI builds it all for you.
        </p>
        <Link
          to ={"/generate"}
          className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300"
        >
          Generate Portfolio with AI
        </Link>
        <p className="text-sm text-gray-500 mt-4">It's free to get started!</p>
      </div>
      <Home2></Home2>
    </>
  );
}

export default Home;
