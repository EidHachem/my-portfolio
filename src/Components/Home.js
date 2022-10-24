import React from 'react';
import { FaBootstrap, FaCss3, FaFilePdf, FaHtml5, FaJs, FaReact, FaSass } from 'react-icons/fa';
import {
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiRuby,
  SiRubyonrails,
  SiTypescript,
} from 'react-icons/si';
import me from '../Assets/me.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  const style = 'animate-pulse hover:animate-none';

  return (
    <div
      id="home"
      className="min-h-[100vh] w-[100%] flex flex-col justify-center items-center gap-8 text-center bg-gainsboro px-7 md:min-h-fit xl:min-h-[100vh] md:pt-28 lg:px-0">
      <img src={me} alt="Eid" className="h-32 w-32 rounded-full lg:h-52 lg:w-52" />
      <h3 className="text-2xl font-medium lg:text-4xl">Hello I'm</h3>
      <h1 className="text-4xl font-semibold font-handlee text-purple mt-[-0.7em] mb-[-0.7em] md:mt-[-0.1em] lg:text-7xl lg:mt-0 lg:mb-0">
        Eid Hachem
      </h1>
      <p className="max-w-screen-md text-[14px] md:text-[16px] md:px-24 lg:px-0 lg:text-base">
        A diligent software developer with one year of experience in web application development.
        Eager to start my career to build innovative and cutting-edge business solutions for global
        clients and corporations. I’m a hard-working person who built up the experience by
        developing real-world projects, and by volunteering in part-time programs including
        mentoring new Bootcamp students at Microverse to achieve concrete goals on expected
        deadlines.
      </p>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col justify-center items-center gap-3 mb-2 lg:flex-row lg:mb-5 lg:mt-5">
        <p className="text-center text-lg font-bold m-0 lg:text-2xl">Resume: </p>
        <a
          href={require('../Assets/My-Resume.pdf')}
          download="Eid-Hachem-Resume.pdf"
          className="bg-blue text-beige rounded p-1 text-sm flex justify-center items_center gap-1 min-w-fit lg:text-base">
          <span>Download pdf</span>{' '}
          <span className="text-center m-auto">
            <FaFilePdf />
          </span>
        </a>
      </motion.div>
      <div className="flex justify-center items-center gap-6 flex-wrap max-w-[20em] md:max-w-lg lg:max-w-full lg:mt-8">
        <FaHtml5
          className={`text-orange w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${style}`}
          title="HTML"
        />
        <FaCss3
          className={`text-lightblue w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${style}`}
          title="CSS"
        />
        <FaJs
          className={`text-yellow w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${style}`}
          title="JavaScript"
        />
        <FaReact
          className={`text-lightblue w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${style}`}
          title="React"
        />
        <SiRedux
          className={`text-lightblue w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${style}`}
          title="Redux"
        />
        <SiRuby
          className={`text-red w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${style}`}
          title="Ruby"
        />
        <SiRubyonrails
          className={`text-red w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${style}`}
          title="Rails"
        />
        <SiPostgresql
          className={`text-lightblue w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${style}`}
          title="Postgresql"
        />
        <SiMysql
          className={`text-lightblue w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${style}`}
          title="Mysql"
        />
        <FaSass
          className={`text-red w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${style}`}
          title="Sass"
        />
        <FaBootstrap
          className={`text-purple w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${style}`}
          title="Bootstrap"
        />
        <SiTypescript
          className={`text-lightblue w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${style}`}
          title="TypeScript"
        />
      </div>
    </div>
  );
};

export default Home;
