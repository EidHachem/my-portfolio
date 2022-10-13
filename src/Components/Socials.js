import React from 'react';
import { FaAngellist, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Socials = ({ blue, lightBlue, gray, tweet }) => {
  return (
    <ul className="flex justify-center align-middle gap-4">
      <li>
        <a href="https://github.com/EidHachem" target="_blank" rel="noreferrer">
          <FaGithub className={`h-6 w-6 text-${gray}`} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/eid-hachem/" target="_blank" rel="noreferrer">
          <FaLinkedin className={`h-6 w-6 text-${lightBlue}`} />
        </a>
      </li>
      <li>
        <a href="https://angel.co/u/eid-hachem" target="_blank" rel="noreferrer">
          <FaAngellist className={`h-6 w-6 text-${blue}`} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/eidHachem1" target="_blank" rel="noreferrer">
          <FaTwitter className={`h-6 w-6 text-${tweet}`} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
