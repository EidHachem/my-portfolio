import React, { useEffect, useState } from 'react';
import { send } from 'emailjs-com';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import { HiOutlineRefresh } from 'react-icons/hi';
import fetchQuotes from '../quotes/RandomQuote';

const Contact = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [refresh, setRefresh] = useState(false);

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

  useEffect(() => {
    fetchQuotes().then((data) => {
      setQuote(data.en);
      setAuthor(data.author);
    });
  }, [refresh]);

  return (
    <div id="contact" className="bg-lightBlue min-h-[100vh] w-[100%] px-5 py-2 lg:px-0">
      <h2 className="text-center pt-20 mb-10 text-blue font-extrabold text-4xl lg:text-7xl font-handlee">
        Contact Me
      </h2>
      <h3 className="text-center mb-5 text-xl">My Resume</h3>
      <div className="flex justify-center items-center gap-2">
        <a
          href={require('../Assets/My-Resume.docx')}
          download="Eid-Hachem-Resume.docx"
          className="bg-blue text-beige rounded p-1 flex justify-start items_center gap-2">
          <span>Download word</span>{' '}
          <span className="text-center m-auto">
            <FaFileWord />
          </span>
        </a>
        <a
          href={require('../Assets/My-Resume.pdf')}
          download="Eid-Hachem-Resume.pdf"
          className="bg-blue text-beige rounded p-1 flex justify-start items_center gap-2">
          <span>Download pdf</span>{' '}
          <span className="text-center m-auto">
            <FaFilePdf />
          </span>
        </a>
      </div>
      <div className="pt-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-start items-center">
          <input
            type="text"
            name="sender_name"
            value={senderName}
            onChange={handleName}
            placeholder="Name*"
            className="w-[90%] lg:w-1/2 h-10 rounded-md border-2 border-blue p-4 accent-blue"
          />
          <input
            type="text"
            name="sender_email"
            value={senderEmail}
            onChange={handleEmail}
            placeholder="Email*"
            className="w-[90%] lg:w-1/2 h-10 rounded-md border-2 border-blue p-4 accent-blue"
          />
          <textarea
            name="message"
            value={message}
            onChange={handleMessage}
            placeholder="Message*"
            className="w-[90%] lg:w-1/2 h-40 rounded-md border-2 border-blue resize-none p-4 accent-blue"
          />
          <button type="submit" className="bg-blue p-2 px-4 rounded text-beige">
            Send
          </button>
        </form>
      </div>
      <figure className="mx-auto max-w-screen-md text-center mt-6 border border-blue p-1 rounded bg-[#fff]">
        <svg
          aria-hidden="true"
          className="mx-auto mb-3 w-8 h-8 text-orange"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <p>Quote:</p>
        <blockquote>
          <p className="text-xl italic font-medium py-3 text-blue">{quote}</p>
        </blockquote>
        <figcaption className="flex justify-center items-center mt-3 space-x-3">
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">{author}</cite>
          </div>
        </figcaption>
        <button
          className="flex justify-center items-center bg-blue p-1 my-2 text-beige rounded m-auto"
          onClick={() => setRefresh(!refresh)}>
          <span>
            <HiOutlineRefresh />
          </span>
          <span>refresh</span>
        </button>
      </figure>
    </div>
  );
};

export default Contact;
