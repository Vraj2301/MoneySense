import React from 'react';
import DebtManagementLesson from './DebtManagementLesson';
import BudgetingLesson from './BudgetingLesson';
import InvestingLesson from './InvestingLesson';

function InteractiveLessons() {
  // Define an array of lessons with their titles, descriptions, and links
  const lessons = [
    {
      title: "Budgeting",
      description: "Learn how to create and manage a budget to track your expenses and achieve your financial goals.",
      link: ""
    },
    {
      title: "Investing",
      description: "Explore different investment strategies and understand how to grow your wealth over time.",
      link: ""
    },
    {
      title: "Debt Management",
      description: "Discover methods for managing and reducing debt to improve your financial health and stability.",
      link: ""
    }
    // Add more lessons as needed
  ];

  return (
    <div className="lessons-container">
      <h2 className="lessons-title">Interactive Lessons</h2>
      <div className="lessons-grid">
        {/* Map through the lessons array and render each lesson */}
        {lessons.map((lesson, index) => (
          <div key={index} className={`lesson ${index % 2 === 0 ? 'grey-background' : 'white-background'}`}>
            <h3 style={{textAlign: "center"}}className="lesson-title">{lesson.title}</h3>
            <p className="lesson-description">{lesson.description}</p>
            {/* Render the appropriate lesson component based on the title */}
            {renderLessonComponent(lesson.title)}
          </div>
        ))}
      </div>
    </div>
  );
}

// Function to render the appropriate lesson component based on the title
function renderLessonComponent(title) {
  switch (title) {
    case "Budgeting":
      return <BudgetingLesson />;
    case "Investing":
      return <InvestingLesson />;
    case "Debt Management":
      return <DebtManagementLesson />;
    default:
      return null;
  }
}

export default InteractiveLessons;
