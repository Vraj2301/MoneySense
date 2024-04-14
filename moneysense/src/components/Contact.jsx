import React from 'react';

function Contact() {
  return (
    <main className="container mt-4">
      <div class="container">
      <h2>Contact Us</h2>
      <p>Have a question or comment? We'd love to hear from you! Please fill out the form below and we'll get back to
        you as soon as possible.</p>
      <form id="contact-form">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea class="form-control" id="message" rows="3" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div id="confirmation" class="confirmation" style="display: none;">
        Thank you for your message! We'll get back to you as soon as possible.
      </div>
    </div>
    </main>
  );
}

export default Contact;
