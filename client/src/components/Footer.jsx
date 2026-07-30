import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

     <div className="footer-column">
  <h3>Support</h3>

  <Link to="/help">
    Help Centre
  </Link>

  <Link to="/safety">
    Safety Information
  </Link>

  <Link to="/cancellation">
    Cancellation Options
  </Link>
</div>


     <div className="footer-column">
    <h3>Community</h3>

      <Link to="/diversity">
     Diversity & Inclusion
    </Link>

      <Link to="/accessibility">
     Accessibility
    </Link>

       <Link to="/invite">
       Invite Friends
     </Link>
    </div>


     <div className="footer-column">
     <h3>Hosting</h3>

      <Link to="/create-listing">
      Become a Host
     </Link>

     <Link to="/host-resources">
     Host Resources
     </Link>

     <Link to="/community-forum">
     Community Forum
     </Link>
    </div>


    <div className="footer-column">
    <h3>About</h3>

    <Link to="/news">
    Newsroom
    </Link>

    <Link to="/careers">
    Careers
    </Link>

     <Link to="/investors">
    Investors
    </Link>
     </div>
      <div className="footer-bottom">
        <p>© 2026 Airbnb Clone | Built with React, Node.js & MongoDB</p>
      </div>

    </footer>
  );
}

export default Footer;