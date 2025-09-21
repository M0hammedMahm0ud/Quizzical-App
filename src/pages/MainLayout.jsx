import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Footer from "./Footer";
export const MainLayout = () => {
  return (
    <div className="MainLayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
