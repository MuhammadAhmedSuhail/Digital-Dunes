import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
  
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        throw new Error("Failed to Login. Please try again.");
      } else {
        setError(null);
        localStorage.setItem("user", JSON.stringify(username));
        navigate("/home");
      }
    } catch (error) {
      console.error("Failed to perform login", error);
      setError("Failed to perform login. Please try again.");
    }
  };
  


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mt-5">
            <div className="card-body text-left">
              <h2 className="card-title mb-4">Login</h2>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form action="http://localhost:8080/login" method="POST" onSubmit={handleLogin}>
                <div className="form-group" style={{textAlign:"left"}}>
                  <label htmlFor="username">Username:</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Username"
                  />
                </div>

                <div className="form-group" style={{textAlign:"left"}}>
                  <label htmlFor="password">Password:</label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">
                   Login 
                </button>
              </form>
              <p className="mt-3">
                Don't have an account? <Link to="/Signup"> Sign up </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
