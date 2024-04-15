import React, { useState } from 'react';

function InvestingLesson() {
  const [quizAnswers, setQuizAnswers] = useState({});
  
  const handleQuizSubmit = (question, answer) => {
    setQuizAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: answer
    }));
  };

  return (
    <div>
      <h3 style={{textAlign: "center"}}>Key Concepts</h3>
      <ul>
        <li>Understanding Different Investment Vehicles</li>
        <li>Risk Management and Diversification</li>
        <li>Long-Term vs. Short-Term Investing</li>
      </ul>
      <h3 style={{textAlign: "center"}}>Interactive Activities</h3>
      <p>Let's test your knowledge with a quick quiz:</p>
      <QuizQuestion 
        question="What is an example of a low-risk investment?"
        options={["Stocks", "Bonds", "Cryptocurrency"]}
        correctAnswer="Bonds"
        onAnswerSubmit={answer => handleQuizSubmit("Low-risk investment", answer)}
        correct={quizAnswers["Low-risk investment"] === "Bonds"}
      />
      {/* Additional quiz questions can be added here */}
    </div>
  );
}

function QuizQuestion({ question, options, correctAnswer, onAnswerSubmit, correct }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onAnswerSubmit(selectedAnswer);
  };

  return (
    <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: submitted && !correct ? '#F8D7DA' : (correct ? '#D4EDDA' : '#FFFFFF') }}>
      <h4>{question}</h4>
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <div key={index}>
            <input 
              type="radio" 
              id={`option${index}`} 
              value={option} 
              checked={selectedAnswer === option}
              onChange={handleOptionChange} 
            />
            <label htmlFor={`option${index}`}>{option}</label>
          </div>
        ))}
        <button type="submit" className="next-button">Submit</button>
      </form>
      {submitted && !correct && <p style={{ color: 'red', marginTop: '5px' }}>Incorrect answer. The correct answer is "{correctAnswer}".</p>}
    </div>
  );
}

export default InvestingLesson;
