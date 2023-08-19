import React, { useState } from "react";
import { Link,useNavigate   } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate ();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a payload object with the form data
    const payload = {
      username: username,
      phonenumber: phoneNumber,
      password: password,
    };

    // Send a POST request to the /signup route of your Express app
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => 
      {
        if (!response.ok) {
          setError("Failed to signup. Please try again.");
        throw new Error("Failed to signup. Please try again.");
      }
      return response.json();
      })
      .then((data) => {
        console.log("Signup response:", data);
        setError(null);
        localStorage.setItem("user", JSON.stringify(username));
        navigate('/home');
      })
      .catch((error) => {
        console.error("Failed to signup:", error);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mt-5">
            <div className="card-body text-left">
              <h2 className="card-title mb-4">Signup</h2>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ textAlign: "left" }}>
                  <label htmlFor="username">Username:</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>

                <div className="form-group" style={{ textAlign: "left" }}>
                  <label htmlFor="phonenumber">Phone Number:</label>
                  <input
                    required
                    type="tel"
                    className="form-control"
                    id="phonenumber"
                    name="phonenumber"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </div>

                <div className="form-group" style={{ textAlign: "left" }}>
                  <label htmlFor="password">Password:</label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
              </form>
              <p className="mt-3">
                Already have an account? <Link to="/">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;