import React from 'react';
import Navbar from './Navbar'
import { useState } from 'react';

function ContactUs() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully.');
        setErrorMessage('');
        setName('');
        setEmail('');
        setMessage('');

        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);

      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
        setSuccessMessage('');

        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
      }
    } catch (error) {
      setErrorMessage('Failed to send the message. Please try again.');
      setSuccessMessage('');

      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container" style={{color:"white"}}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please use the form below to get in touch.</p>
      
      {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

      
      
      <form style={{textAlign:"left"}} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" >Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="5" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </>
  );
}

export default ContactUs;
