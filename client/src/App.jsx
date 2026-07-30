import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Listings from "./pages/Listings";
import ListingDetails from "./pages/ListingDetails";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Experiences from "./pages/Experiences";
import ExperienceBooking from "./pages/ExperienceBooking";
import ProtectedRoute from "./components/ProtectedRoute";
import Shop from "./pages/Shop";
import HelpCenter from "./pages/HelpCenter";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Help from "./pages/Help";
import Safety from "./pages/Safety";
import Diversity from "./pages/Diversity";
import Accessibility from "./pages/Accessibility";
import HostResources from "./pages/HostResources";
import CommunityForum from "./pages/CommunityForum";
import Newsroom from "./pages/Newsroom";
import Careers from "./pages/Careers";
import Investors from "./pages/Investors";
import InviteFriends from "./pages/InviteFriends";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/experiences" element={<Experiences />} />

        <Route 
        path="/experiences/:category" 
       element={<Experiences />} 
       />
       
        <Route 
       path="/experience-booking" 
       element={<ExperienceBooking />} 
       />

       <Route path="/shop/:category" element={<Shop />} />

       <Route path="/help" element={<HelpCenter />} />

        <Route path="/login" element={<Login />} />
       
       <Route path="/help" element={<Help />} />

       <Route path="/safety" element={<Safety />} />

       <Route 
        path="/host-resources" 
        element={<HostResources />} 
       />

      <Route 
        path="/community-forum" 
        element={<CommunityForum />} 
        />

        <Route path="/register" element={<Register />} />
       
        <Route path="/news" element={<Newsroom />} />

         <Route path="/careers" element={<Careers />} />

         <Route path="/investors" element={<Investors />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/listings" element={<Listings />} />

        <Route path="/listings/:id" element={<ListingDetails />} />

        <Route path="/create-listing" element={<CreateListing />} />

        <Route path="/edit-listing/:id"  element={<EditListing />} />

        <Route 
         path="/diversity" 
          element={<Diversity />} 
          />

<       Route 
         path="/accessibility" 
          element={<Accessibility />} 
          />

        <Route 
          path="/invite" 
          element={<InviteFriends />} 
           />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;