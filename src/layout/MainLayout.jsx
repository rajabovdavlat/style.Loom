import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollButton from "../components/ScrollButton/ScrollButton";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow h-screen'>
        <Outlet />
      </main>
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default MainLayout;
