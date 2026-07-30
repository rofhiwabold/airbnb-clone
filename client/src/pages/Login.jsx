
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log("Login button clicked");

    try {
      const response = await API.post("/users/login", {
        email,
        password,
      });

      // Save JWT token
      localStorage.setItem("token", response.data.token);

      // Save user details
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert(response.data.message);

      // Go to home page
        navigate("/");

    } catch (error) {
      alert(
        error.response?.data?.message || "Login failed"
      );
    }
  };


  return (
    <div className="login-page">

      <div className="login-container">

        <h1>Welcome Back</h1>

        <p>Log in to your Airbnb account</p>


        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />


          <button type="submit">
            Log In
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;