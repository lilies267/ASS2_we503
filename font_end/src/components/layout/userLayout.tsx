import { Outlet } from "react-router-dom";
import UserHeader from "../userHeader";
import UserFooter from "../userFooter";
import Slider from "../slider";

const UserLayout = () => {
  return (
    <>
      <UserHeader />
      <Slider />
      <Outlet />
      <UserFooter />
    </>
  );
};

export default UserLayout;
