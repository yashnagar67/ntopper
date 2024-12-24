import React, { useState } from 'react';

const Login = () => {
  // State to store form data and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Hardcoded credentials
  const validUsername = "nexttopper";
  const validPassword = "password123";

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === validUsername && password === validPassword) {
      localStorage.setItem("authenticated", "true");
      window.location.href = "/"; // Redirect to the dashboard
    } else {
      setError(true);
    }
  };

  return (
    <div className="gradient-bg h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #4f46e5, #22d3ee'}}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <p className="text-center text-gray-500 mb-4">Sign in to access your account</p>

        <form id="loginForm" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Login
          </button>
        </form>

        {error && <p className="text-center text-red-500 mt-4">Invalid username or password!</p>}

        <footer className="mt-6 text-center text-gray-500 text-sm">
          &copy; 2024 Next Toppers. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Login;
