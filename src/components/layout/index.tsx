import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";


const MainLayout = ({ }) => {

  const [mobileMenuEnable, setMobileMenu] = useState(false);

  useEffect(() => {
    console.log("mobileMenuEnable", mobileMenuEnable)
  }, [mobileMenuEnable])

  return (
    <>
      <Header setMobileMenu={setMobileMenu} />

      {!mobileMenuEnable && <Outlet />}
    </>
  );
};

export default MainLayout;