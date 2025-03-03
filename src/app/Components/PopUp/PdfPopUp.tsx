import React, { useState } from 'react';
import { X } from 'lucide-react';
import useStore from '@/app/context/useStore';
import { IoIosArrowBack } from 'react-icons/io';

const PdfPopUp: React.FC = () => {
// * ######### Hooks
const [showPdf, setShowPdf] = useState(false);
const { state, dispatch } = useStore();
// * ######### Hooks
// * ######### Logic
  const handleToggle = () => {
    setShowPdf((prev) => !prev);
  };
  const handleBack = () => {
    dispatch({ type: "CLEAR_OPPEND" });
  };
// * ######### Logic
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <button onClick={handleBack}  className="h-[30px] top-[5%]  w-[30px] rounded-full mx-3 flex justify-center items-center  text-stone-700 font-bold hover:text-stone-800 border border-transparent hover:border-stone-950 duration-500 cursor-pointer absolute left-3">
          <IoIosArrowBack size={20} />
      </button>
      <button  onClick={handleToggle}  className="bg-blue-600 cursor-pointer text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"    >
        {showPdf ? 'Hide PDF' : 'Show PDF'}
      </button>
      {/* BDF */}
        {showPdf && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl p-4">
              <button 
                onClick={handleToggle} 
                className="absolute cursor-pointer top-3 right-3 text-gray-600 hover:text-gray-900"
              >
                <X size={24} />
              </button>
              <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">PDF Viewer</h2>
              <div className="w-full h-96 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                <iframe 
                  src="/fake.pdf" 
                  title="Fake PDF"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      {/* BDF */}
    </div>
  );
};

export default PdfPopUp;
