import HeroSection from "./HeroSection/HeroSection"
import MissionSection from "./MissionSection/MissionSection";
import FashionJourneySection from "./FashionJourneySection/FashionJourneySection"



const Home = () => {
  return (
    <div className='bg-dark text-title '>
      <HeroSection />
      <MissionSection />
      <FashionJourneySection />
    </div>
  );
}

export default Home