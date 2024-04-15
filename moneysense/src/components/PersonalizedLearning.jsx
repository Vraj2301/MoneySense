import React, { useState } from 'react';

function PersonalizedLearning() {
  // State variables to store user's financial goals and current knowledge level
  const [financialGoals, setFinancialGoals] = useState('');
  const [knowledgeLevel, setKnowledgeLevel] = useState('');
  // State variable to store personalized learning recommendations
  const [recommendations, setRecommendations] = useState([]);

  // Function to handle changes in financial goals input
  const handleFinancialGoalsChange = (event) => {
    setFinancialGoals(event.target.value);
  };

  // Function to handle changes in knowledge level input
  const handleKnowledgeLevelChange = (event) => {
    setKnowledgeLevel(event.target.value);
  };

  // Function to fetch personalized learning recommendations
  const fetchRecommendations = () => {
    // Dummy recommendations (replace with actual logic)
    const dummyRecommendations = [
      'Explore budgeting techniques',
      'Learn about different investment options',
      'Understand the basics of debt management',
      'Take a course on financial planning',
    ];
    setRecommendations(dummyRecommendations);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Fetch recommendations when form is submitted
    fetchRecommendations();
  };

  return (
    <div className="personalized-learning-container">
      <h2 style={{textAlign: "center"}}>Personalized Learning</h2>
      <form onSubmit={handleSubmit} className="learning-form">
        <div className="form-group">
          <label htmlFor="financial-goals">Financial Goals:</label>
          <input 
            type="text" 
            id="financial-goals" 
            value={financialGoals} 
            onChange={handleFinancialGoalsChange} 
            placeholder="Enter your financial goals" 
            className="form-control" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="knowledge-level">Knowledge Level:</label>
          <input 
            type="text" 
            id="knowledge-level" 
            value={knowledgeLevel} 
            onChange={handleKnowledgeLevelChange} 
            placeholder="Enter your knowledge level" 
            className="form-control" 
          />
        </div>
        <button type="submit" className="btn btn-primary">Get Recommendations</button>
      </form>
      <div className="recommendations">
        <h3 style={{textAlign: "center"}}>Recommendations</h3>
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PersonalizedLearning;
