import { Link, useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();

  return (
    <div className="topNavBar">
      <div className="logo">
        <img
          className="logoImg"
          src="../src/assets/img/logo.gif"
          alt=""
          onClick={() => navigate("/home")}
        />
        <h1 className="logoText">BookingOlogy</h1>
      </div>
      <div className="logout">
        <Link to="/sign-in-business">Business</Link> <span> OR </span>{" "}
        <Link to="/sign-in-client">Client</Link>
      </div>
    </div>
  );
};

export default TopNav;
