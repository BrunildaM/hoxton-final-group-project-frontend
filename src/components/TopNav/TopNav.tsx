import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="topNavBar">
      <div className="logo">
        <img className="logoImg" src="../src/assets/img/logo.png" alt="" />
        <h1 className="logoText">Easy Peasy</h1>
      </div>
      <div className="logout">
        {/* <Link to="/sign-in-business"> */}
          <button>Business</button>
        {/* </Link> */}
        <span> OR </span>
        
      </div>
    </div>
  );
};

export default TopNav;
