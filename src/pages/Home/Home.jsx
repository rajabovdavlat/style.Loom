import HeroSection from "./HeroSection/HeroSection"
import MissionSection from "./MissionSection/MissionSection";
import FashionJourneySection from "./FashionJourneySection/FashionJourneySection"
import LatestCollection from "./LatestCollection/LatestCollection";
import ProductFilter from "./LatestCollection/ProductFilter";



const Home = () => {
  return (
    <div className='bg-dark text-title '>
      <HeroSection />
      <MissionSection />
      <FashionJourneySection />
      <LatestCollection/>
    </div>
  );
}

export default Home