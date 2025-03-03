import useStore from '@/app/context/useStore';
import React, { useState } from 'react';
import { IoIosArrowBack, IoMdClose } from 'react-icons/io';

const AskQPopUp = () => {
// * ################ Start Hooks
  const fakeUser = { id: 1, name: 'John Doe' };
  const [question, setQuestion] = useState('');
  const maxChar = 200;
  const { state, dispatch } = useStore();
// * ################ End Hooks
// * ################ Start Logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() === '') return;
    console.log(`Question from ${fakeUser.name}: ${question}`);
    setQuestion('');
  };
  const handleClose = () => {
    dispatch({ type: "CLEAR_OPPEND" });
  };
// * ################ End Logic
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-stone-900 bg-opacity-50 p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative animate-fadeIn">
        {/* Back Button */}
          <button onClick={handleClose}  className="h-[30px] w-[30px] rounded-full mx-3 flex justify-center items-center  text-stone-800 font-bold hover:text-stone-800 border border-transparent hover:border-stone-950 duration-500 cursor-pointer absolute left-0">
            <IoIosArrowBack size={20} />
          </button>
        {/* Back Button */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Ask a Question</h2>
        {/* Q Form */}
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter your question here..."
              className="w-full p-3 text-stone-950 duration-500 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              maxLength={maxChar}
              rows={4}
            />
            <p className="text-right text-sm text-gray-500">{question.length}/{maxChar}</p>
            
            <button 
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-400"
              disabled={question.trim() === ''}
            >
              Submit Question
            </button>
          </form>
        {/* Q Form */}
      </div>
    </div>
  );
};

export default AskQPopUp;
