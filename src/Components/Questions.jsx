import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const questions = [
    { id: 1, question: "What is Netflix?", answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." },
    { id: 2, question: "How much does Netflix cost?", answer: "Netflix offers various plans, and the cost depends on the plan you choose." },
    { id: 3, question: "Where can I watch?", answer: "You can watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device." },
    { id: 4, question: "What can I watch on Netflix?", answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, and award-winning Netflix originals." },
    { id: 5, question: "Is Netflix good for kids?", answer: "The Netflix Kids experience is included in your membership, with parental controls to restrict content by maturity level." }
  ];

  const toggleDiv = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked question
  };

  return (
   <>
    <div className='flex justify-center items-center h-screen bg-black mt-[70px] md:mt-0'>
      <div className='w-[85vw] mx-10 mt-10'>
        {/* Heading */}
        <div>
          <h1 className='text-white font-bold text-3xl mb-3'>Frequently Asked Questions</h1>
        </div>

        {/* Map over questions to create divs */}
        {questions.map((item, index) => (
          <div key={item.id} className='mb-2'>
            {/* Question Container */}
            <div 
              className='flex justify-between px-3 py-5 rounded-xl bg-[#272727] border-[#303030] border-[2px] cursor-pointer transition duration-500 hover:bg-[#3d3c3c]' 
              onClick={() => toggleDiv(index)}
            >
              <p className='text-white text-xl'>{item.question}</p>
              <div className='flex justify-end items-end'>
                <FaPlus className="text-white text-2xl" />
              </div>
            </div>

            {/* Toggleable Content */}
            <div 
              className={`bg-[#272727] text-white text-lg px-4 rounded-xl border-t-[2px] border-[#303030] overflow-hidden transition-all duration-500 ease-in-out`} 
              style={{
                height: openIndex === index ? "100px" : "0px",
                paddingTop: openIndex === index ? "8px" : "0px",
                paddingBottom: openIndex === index ? "8px" : "0px",
              }}
            >
              {openIndex === index && <p>{item.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-center items-center mt-[100px] md:mt-0'>
       <button className='bg-red-700 hover:bg-red-800 text-white font-bold text-xl px-5 py-2 rounded-3xl'>Get Started</button>
    </div>
    <div className='flex justify-center items-center'>
      <p className='font-semibold text-[17px] text-white'>Create or restart your membership</p>
    </div>
   </>
    
  );
};

export default Questions;
