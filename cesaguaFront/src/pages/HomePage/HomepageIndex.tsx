
import Navbar from "../../shared/HeaderB/Navbar";
import ImageHome from "./Components/ImageHome";
import MisionVision from "./Components/MisionVision";
import MyCards from "./Components/MyCard"
import CarouselIndex from "../../shared/Carrousel/CarouselIndex";
import "../HomePage/home.css";


function HomepageIndex() {
  return (
    <>
      <ImageHome></ImageHome> 
      <MisionVision></MisionVision>
      <MyCards></MyCards>
      <CarouselIndex></CarouselIndex>
    
    </>
  );
}

export default HomepageIndex;
