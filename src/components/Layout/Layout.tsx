import Routers from "../../routes/Routers";
import TopNav from "../TopNav/TopNav";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="main__layout">
      <TopNav />

      <Routers />

      <Footer />
    </div>
  );
};

export default Layout;
