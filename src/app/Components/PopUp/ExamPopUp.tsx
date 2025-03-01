"use client";

import React, { useState } from 'react';

const questions = [
  { id: 1, category: 'PHP', question: 'What does PHP stand for?', answer: 'PHP: Hypertext Preprocessor' },
  { id: 2, category: 'PHP', question: 'How do you start a PHP script?', answer: '<?php and ?>' },
  { id: 3, category: 'HTML', question: 'What is the purpose of the <meta> tag?', answer: 'Provides metadata about the HTML document' },
  { id: 4, category: 'HTML', question: 'What does the <canvas> element do?', answer: 'Draws graphics on the fly via JavaScript' },
  { id: 5, category: 'JavaScript', question: 'What is an event listener in JavaScript?', answer: 'A function that waits for a specific event to occur' },
  { id: 6, category: 'JavaScript', question: 'What is the difference between == and ===?', answer: '== checks value, === checks value and type' },
];

const ExamPopUp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length);
  };

  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl'>
        <h2 className='text-xl font-bold mb-4 text-center'>Exam Questions</h2>
        
        {/* Top Slider for Question Titles */}
        <div className='flex overflow-hidden w-full py-2 bg-gray-100 rounded-md shadow-sm'>
          {questions.map((q, index) => (
            <div key={q.id} className={`px-4 py-2 text-sm font-semibold cursor-pointer transition-all duration-300 ${index === currentIndex ? 'text-blue-600' : 'text-gray-500'}`}>
              {q.category}: {q.question.slice(0, 15)}...
            </div>
          ))}
        </div>
        
        {/* Question Card Slider */}
        <div className='relative mt-6 w-full text-center'>
          <button onClick={prevSlide} className='absolute left-0 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-200 rounded-md'>←</button>
          <div className='bg-blue-100 p-4 rounded-lg shadow-md mx-10'>
            <p className='text-lg font-medium'>{questions[currentIndex].question}</p>
            <p className='text-gray-700 mt-2'>{questions[currentIndex].answer}</p>
          </div>
          <button onClick={nextSlide} className='absolute right-0 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-200 rounded-md'>→</button>
        </div>
      </div>
    </div>
  );
};

export default ExamPopUp;
