import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="header">

      <div className="logo">
        <Link to="/">Airbnb Clone</Link>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/listings">Listings</Link>

        {user && (
          <Link to="/dashboard">Dashboard</Link>
        )}
      </nav>

      <div className="profile">
        {user ? (
          <>
            <span>Hi, {user.username}</span>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <FaUserCircle size={30} />
          </Link>
        )}

        <DarkModeToggle />
      </div>

    </header>
  );
}

export default Header;