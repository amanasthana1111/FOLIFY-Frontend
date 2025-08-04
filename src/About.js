import video1 from "../public/video1.mp4"

const About = () => {
  return (
    <section className="bg-[#FAF4F3] py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            About <span className="text-red-500">Folify</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Turn your resume into a stunning, professional portfolio website
            using AI in seconds.
          </p>
          <div className="w-24 h-1 bg-red-400 mt-4 mx-auto rounded-full" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side */}
          <div className="lg:w-1/2 text-gray-700">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Philosophy
            </h3>
            <p className="mb-4 leading-relaxed">
              At Folify, we believe everyone should have a strong online
              presence. That’s why we built an AI-powered tool to instantly
              transform your resume into a sleek personal portfolio — no design
              or code needed.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>Reads and understands your resume content</li>
              <li>Highlights key skills, achievements, and experience</li>
              <li>Creates a mobile-responsive portfolio in seconds</li>
              <li>Includes free ATS checker and improvement suggestions</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2">
            <video
              className="rounded-xl shadow-lg w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div>
            <h4 className="text-3xl font-bold text-red-500">100+</h4>
            <p className="text-gray-600">Portfolios Generated</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-red-500">30 sec</h4>
            <p className="text-gray-600">Avg. Build Time</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-red-500">Free</h4>
            <p className="text-gray-600">ATS Suggestions</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-red-500">100%</h4>
            <p className="text-gray-600">No-Code Required</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
