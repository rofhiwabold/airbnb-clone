import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
 const navigate = useNavigate();   

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await API.post("/users/register", {
      username,
      email,
      password,
      role: "user",
    });

    alert(response.data.message);

    navigate("/login");
  } catch (error) {
    alert(
      error.response?.data?.message || "Registration failed"
    );
  }
};
  return (
    <div className="login-page">

      <div className="login-container">

        <h1>Create Account</h1>

        <p>Join Airbnb and start exploring</p>


        <form onSubmit={handleSubmit}>


          <input
            type="text"
            placeholder="Full name"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
            required
          />


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
            Register
          </button>


        </form>

      </div>

    </div>
  );
}


export default Register;