"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle, AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoAlarmOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import useStore from "@/app/context/useStore";

const questions = [
  {
    id: 1,
    category: "PHP",
    question: "What does PHP stand for?",
    choices: [
      "Personal Home Page",
      "PHP: Hypertext Preprocessor",
      "Preprocessed Hypertext Page",
      "Private Hosting Protocol",
    ],
    answer: "PHP: Hypertext Preprocessor",
  },
  {
    id: 2,
    category: "JavaScript",
    question: "What is the difference between == and ===?",
    choices: [
      "== checks value, === checks value and type",
      "Both check value and type",
      "== checks type, === checks value",
      "No difference",
    ],
    answer: "== checks value, === checks value and type",
  },
  {
    id: 3,
    category: "React",
    question: "What is the purpose of useState in React?",
    choices: [
      "To manage component state",
      "To handle API requests",
      "To create new components",
      "To define routes",
    ],
    answer: "To manage component state",
  },
  {
    id: 4,
    category: "CSS",
    question: "Which CSS property is used to make a text bold?",
    choices: ["font-style", "font-weight", "text-decoration", "text-transform"],
    answer: "font-weight",
  },
  {
    id: 5,
    category: "MySQL",
    question: "Which SQL statement is used to fetch data from a database?",
    choices: ["FETCH", "SELECT", "GET", "QUERY"],
    answer: "SELECT",
  },
];

const ExamPopUp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);
  // & Handler for the back button.
    const { state, dispatch } = useStore();
    const handleBack = () => {
      dispatch({ type: "CLEAR_OPPEND" });
    };
  // & Handler for the back button.
  const handleQuestionClick = (index : any ) => {
    setCurrentIndex(index);
  };
  

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-blue-700 p-4">
      {/* Exam Head */}
      <div className="flex justify-center relative w-[90%] mb-5">
        <button onClick={handleBack}  className="h-[30px] w-[30px] rounded-full mx-3 flex justify-center items-center  text-stone-200 font-bold hover:text-stone-800 border border-transparent hover:border-stone-950 duration-500 cursor-pointer absolute left-0">
          <IoIosArrowBack size={20} />
        </button>
        <span className="bg-yellow-300 shadow-lg flex gap-2 items-center justify-center relative shadow-yellow-300/30 py-2 px-5 rounded-md">
          <IoAlarmOutline size={20} /> {timeLeft}s
        </span>
      </div>
      {/* Exam Head */}

      {/* Question Navigation */}
      <div className="flex gap-3 mt-10">
        {questions.map((q, index) => (
          <button
            key={q.id}
            className={`h-[50px] w-[50px] rounded-full font-bold border ${currentIndex === index ? "bg-transparent" : "bg-stone-200 text-stone-800 hover:bg-transparent hover:border-stone-950"} duration-500 cursor-pointer`}
            onClick={() => handleQuestionClick(index)}
          >
            {q.id}
          </button>
        ))}
      </div>
      {/* Question Navigation */}

      {/* Exam Body */}
      <div className="w-[80%] max-w-[600px] h-[500px] pb-10 mx-auto p-5 bg-white mt-10 text-stone-900 rounded-md">
        <span className="block font-black">{questions[currentIndex].id}. </span>
        <span className="flex flex-wrap font-bold">{questions[currentIndex].question}</span>
        <div className="flex items-center justify-center flex-wrap mt-10 gap-4">
          {questions[currentIndex].choices.map((Ch, i) => (
            <div key={i} className=" cursor-pointer flex  w-[90%]  shadow-lg rounded-lg shadow-stone-500">
              <span className="border-r border-stone-500 p-5 flex items-center justify-center text-stone-950 hover:text-white duration-300">
                <MdOutlineRadioButtonUnchecked />
              </span>
              <span className="py-1  px-10 font-bold flex items-center text-stone-950">{Ch}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Exam Body */}
    </div>
  );
};

export default ExamPopUp;
