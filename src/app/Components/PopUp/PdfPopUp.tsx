import React, { useState } from 'react';

const PdfPopUp: React.FC = () => {
  const [showPdf, setShowPdf] = useState(false);

  const handleToggle = () => {
    setShowPdf((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
        <button 
        onClick={handleToggle} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {showPdf ? 'Hide PDF' : 'Show PDF'}
      </button>
      {showPdf && (
        <div className="mt-4 w-full md:w-2/3 h-96 border border-gray-300 shadow-lg">
          <iframe 
            src="/fake.pdf" 
            title="Fake PDF"
            className="w-full h-full" 
          />
        </div>
      )}
    </div>
  );
};

export default PdfPopUp;
