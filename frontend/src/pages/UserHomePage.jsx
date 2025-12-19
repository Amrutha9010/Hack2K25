import { useNavigate } from "react-router-dom";
import "./UserHomePage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import bgImage from "../images/newbg3.jpg";
import threeImage from "../images/f1.jpg";
import fourImage from "../images/f2.jpg";
import fiveImage from "../images/f3.jpg";
import sixImage from "../images/f4.jpg";
import sevenImage from "../images/f5.jpg";
import SOSButton from "../components/SOSButton";

function UserHomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        className="main-section"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <img
          className="three"
          src={threeImage}
          alt="Appointment"
          title="Book Appointment"
          onClick={() => navigate("/booking")}
        />

        <img
          className="four"
          src={fourImage}
          alt="Remedies"
          title="Home Remedies"
          onClick={() => navigate("/remedies")}
          style={{ cursor: "pointer" }}
        />

        <img
          className="five"
          src={fiveImage}
          alt="Reports"
          title="Medical Reports"
        />

        <img
          className="six"
          src={sixImage}
          alt="Pharmacy"
          title="Pharmacy"
        />

        <img
          className="seven"
          src={sevenImage}
          alt="Lab Testing"
          title="Lab Testing"
        />
      </div>
      <SOSButton />

      <Footer />
    </>
  );
}

export default UserHomePage;