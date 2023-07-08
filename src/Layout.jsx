import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <img style={{ width: "100%" }} src="img/school.jpg"></img>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
