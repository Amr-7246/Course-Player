"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle, AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoAlarmOutline } from "react-icons/io5";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { useRouter } from "next/navigation";
import useStore from "@/app/context/useStore";
import { questions } from "@/app/Data/FakeData";


const ExamPopUp = () => {
// * Start Hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [WhichSelected, setWhichSelected] = useState(null);
// * End Hooks
// * Start Logic
  // & timer
    useEffect(() => {
      if (timeLeft <= 0) return;
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }, [timeLeft]);
  // & timer
  // & Handler for the back button.
    const { state, dispatch } = useStore();
    const handleBack = () => {
      dispatch({ type: "CLEAR_OPPEND" });
    };
  // & Handler for the back button.
  // & Handler for the Q Toggle
    const handleQuestionClick = (index : any ) => {
      setCurrentIndex(index);
    };
  // & Handler for the Q Toggle
// * End Logic
  return (
    <div className=" w-full h-screen overflow-y-scroll flex flex-wrap items-center justify-center bg-blue-700 p-4">
      {/* Exam Head */}
      <div className="flex justify-center  relative w-[90%] mb-5">
        <button onClick={handleBack}  className="h-[30px] w-[30px] rounded-full mx-3 flex justify-center items-center  text-stone-200 font-bold hover:text-stone-800 border border-transparent hover:border-stone-950 duration-500 cursor-pointer absolute left-0">
          <IoIosArrowBack size={20} />
        </button>
        <span className="bg-yellow-300 shadow-lg flex gap-2 items-center justify-center relative shadow-yellow-300/30 py-2 px-5 rounded-md">
          <IoAlarmOutline size={20} /> {timeLeft}s
        </span>
      </div>
      {/* Exam Head */}

      {/* Question Navigation */}
      <div className="flex w-[100%] justify-center gap-3 mt-10">
        {questions.map((q, index) => (
          <button
            key={q.id}
            className={`h-[50px] w-[50px] rounded-full font-bold border ${currentIndex === index ? "bg-transparent" : "bg-stone-200 text-stone-800 hover:bg-transparent hover:border-stone-950"} duration-500 cursor-pointer`}
            onClick={() => {handleQuestionClick(index) , setWhichSelected(null)}}
          >
            {q.id}
          </button>
        ))}
      </div>
      {/* Question Navigation */}

      {/* Exam Body */}
      <div className="w-[95%] max-w-[600px] min-h-[500px] pb-10 mx-auto p-5 bg-white mt-10 text-stone-900 rounded-md">
        <span className="block font-black">{questions[currentIndex].id}. </span>
        <span className="flex flex-wrap font-bold">{questions[currentIndex].question}</span>
        <div className="flex items-center justify-center flex-wrap mt-10 gap-4">
          {questions[currentIndex].choices.map(( Ch , i : any ) => (
            <div onClick={() => setWhichSelected(i) } key={i} className= {` ${ WhichSelected == i ? 'bg-blue-600' : 'bg-white' } cursor-pointer flex hover:bg-blue-600 duration-500 hover:text-stone-800  w-[95%]  shadow-lg rounded-lg shadow-stone-500`}>
              <span className="border-r border-stone-500 p-5 flex items-center justify-center text-stone-950 hover:text-white duration-300">
                { WhichSelected == i ?  <MdOutlineRadioButtonChecked/>  : <MdOutlineRadioButtonUnchecked /> }
              </span>
              <span className="py-2 px-2 font-bold flex justify-center items-center text-stone-950">{Ch}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Exam Body */}
    </div>
  );
};

export default ExamPopUp;
