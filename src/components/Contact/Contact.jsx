import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(0); // countdown in seconds


    const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log(result);

      if (result.success) {
        setSubmitted(true);
        formRef.current.reset(); // Clear the form after submit
        setTimer(60); 
      } else {
        alert("Failed to send message.");
        console.error(result);
      }
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  useEffect(() => {
  let countdown;

  if (timer > 0) {
    countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  return () => clearInterval(countdown);
}, [timer]);


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>

      <div className="contact-section">

        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>dev.saikatbiswas@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+919907145093</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Kolkata, India</p>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-right">
          <input type="hidden" name="access_key" value="6aaa6a83-0ce5-4c72-8469-91fa91043973" />
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          
          
          <div className="contact-submit-container">
            <button type="submit" className="contact-submit" disabled={timer > 0}>
            {timer > 0 ? `Wait (${timer}s)` : "Submit now"} </button>

            {submitted && (
            <div className="contact-success" onClick={() => setSubmitted(false)}>
            ✅ Message has been sent!
            </div>
            )}
        </div>

          
        </form>
      </div>
    </div>
  );
};

export default Contact;
