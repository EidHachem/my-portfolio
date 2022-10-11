import React, { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (e) => {
    setSenderName(e.target.value);
  };
  const handleEmail = (e) => {
    setSenderEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senderName && senderEmail && message) {
      send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { senderName, senderEmail, message },
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
      setSenderName('');
      setSenderEmail('');
      setMessage('');
    } else if (!senderName) {
      alert('Please enter your name');
    } else if (!senderEmail) {
      alert('Please enter your email');
    } else if (!message) {
      alert('Please enter a message');
    }
  };

  return (
    <div className="bg-lightBlue h-[100vh] w-[100%]">
      <h2 className="text-center pt-20 mb-20 text-blue font-extrabold text-6xl font-handlee">
        Contact Me
      </h2>
      <div className="pt-40">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-start items-center">
          <input
            type="text"
            name="sender_name"
            value={senderName}
            onChange={handleName}
            placeholder="Name*"
            className="w-1/2 h-10 rounded-md border-2 border-blue p-4 accent-blue"
          />
          <input
            type="text"
            name="sender_email"
            value={senderEmail}
            onChange={handleEmail}
            placeholder="Email*"
            className="w-1/2 h-10 rounded-md border-2 border-blue p-4 accent-blue"
          />
          <textarea
            name="message"
            value={message}
            onChange={handleMessage}
            placeholder="Message*"
            className="w-1/2 h-40 rounded-md border-2 border-blue resize-none p-4 accent-blue"
          />
          <button type="submit" className="bg-blue p-2 px-4 rounded text-beige">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
