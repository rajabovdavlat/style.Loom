import React from "react";

const AnswersCard = ({ title, desc }) => {
  return (
    <div className='select-none border border-dashed border-blink rounded-xl p-10 bg-black/30'>
      <h3 className='text-title font-bold text-2xl mb-4'>{title}</h3>
      <p className='text-desc2 text-md text-semibold w-[678px]'>{desc}</p>
    </div>
  );
};

export default AnswersCard;
