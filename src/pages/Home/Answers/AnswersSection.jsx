import {svgs} from "../../../assets/images/images"
import AnswersCard from "./AnswersCard";
import { Answers } from "../home.data/Answers";

const AnswersSection = () => {
  return (
    <section className='container select-none pb-[100px]'>
      <div className='flex justify-between items-center'>
        <div className='mb-15'>
          <h2 className='w-full font-semibold text-4xl sm:text-5xl md:text-6xl   pb-[30px] select-none '>
            Have Questions? We Have Answers.
          </h2>
          <p className='w-full max-w-[638px] text-base sm:text-lg text-gray select-none'>
            Ease into the world of StyleLoom with clarity. Our FAQs cover a
            spectrum of topics.
          </p>
        </div>
       <div className='auto-pulse-glow hidden md:block'>
  <img
    src={svgs.AnswerBgImg}
    alt=''
    className="select-none h-auto object-contain"
  />
</div>
      </div>
      <div className='grid mt-3 gap-8 md:grid-cols-1 lg:grid-cols-2 '>
        {Answers.map((item, index) => (
          <AnswersCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default AnswersSection