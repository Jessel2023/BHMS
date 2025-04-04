import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importing useNavigate for redirection
import Header from '../assets/header';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate(); // Initialize useNavigate for page redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error before submitting

    try {
      const response = await fetch("http://localhost/bhms/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.message === "success") {
        alert("Login Successful!");
        localStorage.setItem("user", JSON.stringify(data.user)); // Storing user data
        navigate("/admindashboard"); // Redirect to admin dashboard
      } else {
        setError(data.message || "Invalid username or password");
      }
    } catch (err) {
      setError("Failed to connect to the server");
    } finally {
      setLoading(false);
    }
  };

  // Toggle the password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <Header />
      <div className="card shadow-lg p-4" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Login</h2>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="input-group-text" onClick={togglePassword} style={{ cursor: "pointer" }}>
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} />
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
