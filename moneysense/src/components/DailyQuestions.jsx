import React, { useState, useEffect } from 'react';

function DailyQuestions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: "What is the difference between a Roth IRA and a Traditional IRA?",
      options: [
        { text: "Roth IRA allows tax-free withdrawals in retirement, while Traditional IRA contributions are tax-deductible but withdrawals are taxed as income.", isCorrect: true },
        { text: "Roth IRA contributions are tax-deductible but withdrawals are taxed as income, while Traditional IRA allows tax-free withdrawals in retirement.", isCorrect: false },
        { text: "Both Roth IRA and Traditional IRA have the same tax treatment.", isCorrect: false },
      ],
    },
    {
      question: "How can you reduce your monthly expenses?",
      options: [
        { text: "By increasing unnecessary expenses.", isCorrect: false },
        { text: "By budgeting and cutting unnecessary expenses.", isCorrect: true },
        { text: "By ignoring your expenses altogether.", isCorrect: false },
      ],
    },
    {
      question: "What are the benefits of diversifying your investment portfolio?",
      options: [
        { text: "Diversification increases the risk of your investments.", isCorrect: false },
        { text: "Diversification helps reduce risk by spreading investments across different assets.", isCorrect: true },
        { text: "Diversification has no impact on investment risk.", isCorrect: false },
      ],
    },
    // Add more questions as needed
  ]);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer('');
    setShowAnswer(false);
  };

  useEffect(() => {
    setSelectedAnswer('');
    setShowAnswer(false);
  }, [currentQuestionIndex]); // Reset selected answer and hide answer on question change

  return (
    <div className="daily-questions-container">
      <h2 style={{textAlign: "center"}}>Daily Questions</h2>
      {currentQuestionIndex < questions.length ? (
        <form onSubmit={handleSubmit}>
          <div className="question">
            <p>{questions[currentQuestionIndex].question}</p>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <input 
                  type="radio" 
                  id={`option${index}`} 
                  value={option.text} 
                  checked={selectedAnswer === option.text}
                  onChange={handleOptionChange} 
                />
                <label htmlFor={`option${index}`} style={{ backgroundColor: selectedAnswer === option.text ? (option.isCorrect ? 'green' : 'red') : 'transparent' }}>
                  {option.text}
                </label>
              </div>
            ))}
          </div>
          <button className="next-button" onClick={handleNextQuestion}>Next Question</button>
        </form>
      ) : (
        <p>You have completed all the daily questions!</p>
      )}
    </div>
  );
}

export default DailyQuestions;
