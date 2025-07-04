import HeroSection from "./HeroSection/HeroSection"
import MissionSection from "./MissionSection/MissionSection";



const Home = () => {
  return (
    <div className='bg-dark text-title '>
      <HeroSection />
      <MissionSection />
    </div>
  );
}

export default Home