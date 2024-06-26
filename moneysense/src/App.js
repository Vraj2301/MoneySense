import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import BudgetingPage from './components/BudgetingPage';
import About from './components/About';
import Contact from './components/Contact';
import Debt_management from './components/Debt_management';
import Financial_literacy from './components/Financial_literacy';
import Investing from './components/Investing';
import Script from './components/Script'; // Import the Script component
import LoginPage from './components/Login';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignupPage from './components/Sign_up';

function App() {
  return (
    <Router>
      <div className="App">

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/budgeting" element={<BudgetingPage />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/debt_management" element={<Debt_management />} />
          <Route path="/financial_literacy" element={<Financial_literacy />} />
          <Route path="/investing" element={<Investing />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/sign_up" element={<SignupPage/>}/>
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Script */}
      <Script />
      </div>
    </Router>
  );
}

export default App;