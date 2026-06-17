import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorised = ({ mesg }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    if (localStorage.getItem("token")) {
      navigate(-1);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-lg text-center">
        {mesg ? (
          <>
            <div className="mb-6">
              <div className="text-red-500 text-5xl mb-4">
                <i className="fas fa-exclamation-circle"></i>
              </div>
              <p className="text-gray-700 text-lg mb-6">{mesg}</p>
              <div className="space-y-4">
                <button
                  className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  onClick={handleClick}
                >
                  Go Back
                </button>
                <button
                  className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-6">
              <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
              <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Page Not Found
              </h2>
              <p className="text-gray-600 mb-6">
                Oops! It looks like this page doesn&apos;t exist.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Home
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Unauthorised;
