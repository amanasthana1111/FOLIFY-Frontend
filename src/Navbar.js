import { useEffect, useState } from "react";
import { Link } from "react-router";
const Navbar = () => {
  const [views, setView] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("https://folify-backend.onrender.com/users");
      const data = await res.json();
      setView(data);
    };
    fetchData();
  }, []);
  return (
    <nav className="bg-[#FAF4F3] w-full shadow-sm py-4 px-6 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://i.ibb.co/9knDhnVs/Black-White-Modern-Handwriting-Design-Studio-Logo-removebg-preview.png"
          alt="Folify"
          className="w-12 h-auto object-contain filter invert"
        />
        <Link to="/" className="text-xl font-bold text-gray-800">
          Folify
        </Link>
      </div>

      <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
        <li>
          <Link to="/template" className="hover:text-red-600 transition">
            Templates
          </Link>
        </li>
        <li>
          <Link to="/how-it-works" className="hover:text-red-600 transition">
            How It Works
          </Link>
        </li>
        <li>
          <Link
            to="/ats-resume-checker"
            className="hover:text-red-600 transition"
          >
            ATS Checker
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-red-600 transition">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-red-600 transition">
            About
          </Link>
        </li>
      </ul>

      {/* Right: Status + Create Portfolio Button */}
      <div className="flex items-center space-x-4">
        <span className="text-green-600 text-sm font-medium hidden sm:block">
          Online...
        </span>

        <div className="bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-red-600 transition">
          Total User : {views == 0 ? "" : views?.TotalView}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
