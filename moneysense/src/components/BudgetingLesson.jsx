import React, { useState } from 'react';

function BudgetingLesson() {
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
        <li>Understanding Income and Expenses</li>
        <li>Creating a Budget Plan</li>
        <li>Tracking and Adjusting Expenses</li>
      </ul>
      <h3 style={{textAlign: "center"}}>Interactive Activities</h3>
      <p>Let's test your knowledge with a quick quiz:</p>
      <QuizQuestion
        question="What is the first step in creating a budget?"
        options={["Identifying sources of income", "Listing all expenses", "Setting financial goals"]}
        correctAnswer="Identifying sources of income"
        onAnswerSubmit={(answer) => handleQuizSubmit("Step 1", answer)}
        correct={quizAnswers["Step 1"] === "Identifying sources of income"}
      />
      {/* More interactive elements can be added here */}
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

export default BudgetingLesson;
