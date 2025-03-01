import React, { useState } from 'react';

const AskQPopUp = () => {
  // Fake user details
  const fakeUser = { id: 1, name: 'John Doe' };

  // Local state for the question text
  const [question, setQuestion] = useState('');

  // Handle form submission
  const handleSubmit = (e : any ) => {
    e.preventDefault();
    if (question.trim() === '') return;

    // Simulate sending the question for the course reader
    console.log(`Question from ${fakeUser.name}: ${question}`);
    
    // Reset the question after submission
    setQuestion('');
  };

  return (
    <div className="pop-up">
      <h2>Ask a Question</h2>
      <p>Logged in as: {fakeUser.name}</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question here..."
        />
        <br />
        <button type="submit">Submit Question</button>
      </form>
    </div>
  );
};

export default AskQPopUp;
