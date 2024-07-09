import React, { useState } from "react";
import "../styles/Header.css";
import Login from "./Login";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="text-gray-800 p-4 border-b-2 border-blue-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img
            src="https://logowik.com/content/uploads/images/hindustan-aeronautics-limited3910.jpg"
            alt="HAL Logo"
            className="h-16 w-16"
          />
          <div className="text-xl font-semibold">
            <a href="#" className="text-blue-700 hover:text-blue-800">
              HAL Korwa
            </a>
          </div>
        </div>
        <nav className="space-x-6 mb-4 md:mb-0">
          <a
            href="#rajyabhasha"
            className="hover:text-blue-700 transition duration-200"
          >
            Rajyabhasha
          </a>
          <a
            href="#gallery"
            className="hover:text-blue-700 transition duration-200"
          >
            Gallery
          </a>
          <a
            href="#telephone"
            className="hover:text-blue-700 transition duration-200"
          >
            Telephone
          </a>
          <a
            href="#contact"
            className="hover:text-blue-700 transition duration-200"
          >
            Contact
          </a>
        </nav>
        <button
          onClick={openModal}
          className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded transition duration-200"
        >
          Login
        </button>
      </div>
      <div className="greeting text-center mt-4 text-lg font-medium text-blue-700">
        Welcome to the HAL Korwa Portal
      </div>

      {/* Login Modal */}
      {isModalOpen && <Login onClose={closeModal} />}
    </header>
  );
};

export default Header;
