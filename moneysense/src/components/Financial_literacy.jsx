import React from 'react';
import DailyQuestions from './DailyQuestions'; // Import the DailyQuestions component
import InteractiveLessons from './Interactive_less';
import PersonalizedLearning from './PersonalizedLearning';

function Financial_literacy() {
  return (
    <main className="container mt-4">
      <h2 style={{textAlign: "center"}}>Financial Literacy</h2>
      <p>Services like loans, insurance, and credit cards come with complexities that are often overlooked. Without a
        solid understanding of the associated paperwork, commitments, and interest rates, individuals are susceptible to
        making decisions that lead to financial strain.</p>
      <p>Here are some tips for improving your financial literacy:</p>
      <ul class="list-unstyled">
        <li>Educate yourself on financial terminology and concepts.</li>
        <li>Regularly review your financial statements and understand what you're paying for.</li>
        <li>Create a financial plan and set goals for yourself.</li>
        <li>Consider seeking help from a financial advisor if you're unsure about making financial decisions.</li>
      </ul>
      <section>
        <div>
          <InteractiveLessons />
        </div>
        <div>
          <DailyQuestions />
        </div>
      </section>
    </main>
  );
}

export default Financial_literacy;