

const TopNav = () => {

  
  return (
    <div className="topNavBar">
      <div className="logo">
        <img className="logoImg" src="../public/img/logo.png" alt="" />
        <h1 className="logoText">Easy Peasy</h1>
      </div>
      <div className="logout">
        <button >Business</button>
        {" "}
        <span> OR </span>
        {" "}
        
      </div>
    </div>
  );
};

export default TopNav;
