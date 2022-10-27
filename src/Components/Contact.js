import React, { useEffect, useState } from 'react';
import { send } from 'emailjs-com';
import fetchQuotes from '../quotes/RandomQuote';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      type: 'spring',
      stiffness: 150,
    },
  },
  hover: {
    scale: 0.9,
    transition: {
      duration: 0.4,
      repeat: Infinity,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const Contact = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleName = (e) => {
    setSenderName(e.target.value);
  };
  const handleEmail = (e) => {
    setSenderEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  function isEmail(emailAdress) {
    let regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (emailAdress.match(regex)) return true;
    else return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senderName.trim() && senderEmail.trim() && message.trim() && isEmail(senderEmail)) {
      send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { senderName, senderEmail, message },
        process.env.REACT_APP_EMAILJS_USER_ID,
      ).catch((err) => {
        throw new Error(err);
      });
      Swal.fire({
        title: 'Message Sent!',
        html: `<p>Thank you for your message. I will get back to you as soon as possible</p><br />
        <p>Meanwhile I will leave you with one of my favorite programming quotes: </p><p style= "font-style: italic; font-weight: 500;">${quote}</p><p style="font-weight: bold;">-${author}</p>`,
        icon: 'success',
        confirmButtonText: 'OK',
      });
      setSenderName('');
      setSenderEmail('');
      setMessage('');
    } else if (!senderName) {
      Swal.fire({
        title: 'Please enter your name',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
        confirmButtonText: 'OK',
        confirmButtonColor: '#003049',
      });
    } else if (!senderEmail) {
      Swal.fire({
        title: 'Please enter your email',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
        confirmButtonText: 'OK',
        confirmButtonColor: '#003049',
      });
    } else if (!isEmail(senderEmail)) {
      Swal.fire({
        title: 'Please enter a valid email',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
        confirmButtonText: 'OK',
        confirmButtonColor: '#003049',
      });
    } else if (!message) {
      Swal.fire({
        title: 'Please enter a message',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
        confirmButtonText: 'OK',
        confirmButtonColor: '#003049',
      });
    }
  };

  useEffect(() => {
    fetchQuotes().then((data) => {
      setQuote(data.en);
      setAuthor(data.author);
    });
  }, []);

  return (
    <div
      id="contact"
      className="bg-gainsboro min-h-[100vh] w-[100%] px-5 py-2 md:min-h-fit lg:px-0">
      <h2 className="text-center pt-20 mb-10 text-purple font-extrabold text-4xl lg:text-5xl font-handlee">
        Contact Me
      </h2>
      <div className="flex flex-col items-center justify-center">
        <p className="text-center xl:text-xl font-bold text-blue mb-5 xl:max-w-[50%]">
          I'm always open to new opportunities and challenges. If you have any questions or want to
          work together, feel free to contact me by using the form below.
        </p>
        <p className="text-center xl:text-xl font-bold text-blue mb-5 xl:max-w-[50%]">
          If you want direct contact, you can also reach me via{' '}
          <a href="tel:+961 78 818 531" className="text-orange">
            {' '}
            mobile
          </a>{' '}
          or by sending me an{' '}
          <a href="mailto:eidhachem1@gmail.com" className="text-orange">
            {' '}
            email
          </a>{' '}
          .
        </p>
      </div>
      <div className="pt-10 pb-24">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-start items-center">
          <input
            type="text"
            name="sender_name"
            value={senderName}
            onChange={handleName}
            placeholder="Name*"
            className="w-[90%] lg:w-1/2 h-10 rounded-md border-2 border-blue p-4 accent-blue bg-lightGray"
          />
          <input
            type="text"
            name="sender_email"
            value={senderEmail}
            onChange={handleEmail}
            placeholder="Email*"
            className="w-[90%] lg:w-1/2 h-10 rounded-md border-2 border-blue p-4 accent-blue bg-lightGray"
          />
          <textarea
            name="message"
            value={message}
            onChange={handleMessage}
            placeholder="Message*"
            className="w-[90%] lg:w-1/2 h-40 rounded-md border-2 border-blue resize-none p-4 accent-blue bg-lightGray"
          />
          {senderName.trim() && senderEmail.trim() && message.trim() ? (
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              type="submit"
              className="bg-blue p-2 px-4 xl:px-10 xl:text-xl rounded text-beige">
              Send
            </motion.button>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Contact;
