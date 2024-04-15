import React from 'react';
import Slideshow from './Slideshow';

function MainContent() {
  return (
    <main className="container mt-4">
      <h2 style={{ textAlign: "center" }}>Welcome to MoneySense</h2>
      <div style={{ width: '100%', margin: '0 auto' }}>
        {/* Adjust the width and margin as needed */}
        <Slideshow />
      </div>
      <p style={{ marginTop: "20px" }}>
        In our money-driven world, a large number of individuals have a minimal
        understanding of how to manage their personal finances effectively. This
        knowledge gap leads to debt, financial stress, instability and missed
        opportunities. In order to address the problem at hand properly, we must
        acknowledge the deficiencies across these major domains where financial
        literacy is lacking: Budgeting, debt management, investing and
        financial decision making.
      </p>
    </main>
  );
}

export default MainContent;
