import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import ImageGallary from "../Pages/Home/ImageGallary/ImageGallary";
import ResearchPaper from "../Pages/Home/ResearchPaper/ResearchPaper";


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ImageGallary></ImageGallary>
      <ResearchPaper></ResearchPaper>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;