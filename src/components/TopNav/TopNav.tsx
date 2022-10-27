import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="topNavBar">
      <div className="logo">
        <img className="logoImg" src="../src/assets/img/logo.png" alt="" />
        <h1 className="logoText">Easy Peasy</h1>
      </div>
      <div className="logout">
        <button>Business</button> <span> OR </span> <button>Client</button>
      </div>
    </div>
  );
};

export default TopNav;
