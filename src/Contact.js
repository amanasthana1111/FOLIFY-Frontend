import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-zinc-900 p-4">
      <div className="bg-zinc-900/80 backdrop-blur-lg shadow-xl p-8 rounded-3xl max-w-md w-full text-center transform transition duration-500 hover:scale-[1.03] border border-zinc-800 hover:shadow-2xl">
        <div className="flex justify-center mb-4">
          <img
            src="https://avatars.githubusercontent.com/u/120777911?v=4" // Replace with your image
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-yellow-400 shadow-md hover:scale-110 transition"
          />
        </div>
        <h1 className="text-2xl font-bold text-yellow-400">Aman Asthana</h1>
        <p className="text-gray-400 mt-1 mb-4">
          Full-Stack Developer & Crypto Enthusiast
        </p>
        <p className="text-gray-300 leading-relaxed text-sm">
          I’m passionate about building fast, accessible web apps and exploring
          the future of blockchain, AI, and tech innovation. Currently working
          on crypto tools and contributing to open-source.
        </p>

        <div className="mt-6 flex justify-center gap-6 text-2xl text-gray-300">
          <a
            href="https://github.com/amanasthana1111"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition hover:scale-125 cursor-pointer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amanasthanacse/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition hover:scale-125 cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/dev_aman12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition hover:scale-125 cursor-pointer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
