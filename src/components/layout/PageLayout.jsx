import { Link, Outlet } from "react-router-dom";
import Header from "./header/Header";

const PageLayout = () => {
  return (
    <>
    <Header/>
      <h1 className="text-lg">
        <Link to={"/"}>Home</Link> | <Link to={"/about"}>About</Link>| <Link to={"/dashboard"}>dashboard</Link>|<Link to={"/admin/dashboard"}>Admin</Link>
      </h1>
      <Outlet />
    </>
  );
};

export default PageLayout;
