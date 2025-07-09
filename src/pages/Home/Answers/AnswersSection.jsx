import {svgs} from "../../../assets/images/images"
import AnswersCard from "./AnswersCard";
import { Answers } from "../home.data/Answers";

const AnswersSection = () => {
  return (
    <section className='container select-none pb-[100px]'>
      <div className='flex justify-between items-center'>
        <div className='mb-15'>
          <h2 className='text-title text-6xl mb-3 font-bold '>
            Have Questions? We Have Answers.
          </h2>
          <p className='text-desc2 text-lg font-semibold'>
            Ease into the world of StyleLoom with clarity. Our FAQs cover a
            spectrum of topics.
          </p>
        </div>
        <div className='auto-pulse-glow'>
          <img src={svgs.AnswerBgImg} alt='AnswersbgImg' />
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