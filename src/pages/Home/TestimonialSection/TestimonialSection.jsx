import { svgs } from "../../../assets/images/images";
import { testimonials } from "../home.data/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <section className='py-20 bg-dark text-white select-none'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-5xl font-bold  mb-5'>
              THE STYLELOOM TESTIMONIAL COLLECTION.
            </h2>
            <p className='text-lg text-desc2 mb-[80px]  '>
              At StyleLoom, our customers are the heartbeat of our brand.
            </p>
          </div>
          <img src={svgs.bgotziv} alt='' className='auto-pulse-glow' />
        </div>
        <div className='grid mt-3 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
