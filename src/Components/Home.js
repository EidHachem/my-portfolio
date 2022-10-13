import React from 'react';
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact, FaSass } from 'react-icons/fa';
import {
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiRuby,
  SiRubyonrails,
  SiTypescript,
} from 'react-icons/si';
import Socials from './Socials';

const Home = () => {
  const style = 'animate-pulse hover:animate-none';

  return (
    <div
      id="home"
      className="min-h-[100vh] w-[100%] flex flex-col justify-center items-center gap-8 text-center bg-gainsboro px-7 lg:px-0 border-b-[1px] border-blue">
      <img
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        alt="Eid"
        className="h-40 w-40 rounded-full lg:h-52 lg:w-52"
      />
      <h3 className="text-2xl font-medium lg:text-4xl">Hello I'm</h3>
      <h1 className="text-4xl font-semibold font-handlee text-blue lg:text-7xl">Eid Hachem</h1>
      <p className="max-w-screen-md text-[14px] lg:text-base">
        Let me tell you few things about me...
        <br /> I'm a business school graduate, I found my passion into programming the first time I
        was introduced to Java in an elective university class, After a while I started
        self-studying web development, and joined Microverse bootcamp to learn more about the field
        in a pair programming way that they offered. Now I am a full-stack web developer who is
        ready to start a new career that's filled with passion and opportunities.
      </p>
      <Socials blue="blue" lightBlue="lightblue" gray="gray" tweet="twitterBlue" />
      <div className="flex justify-center items-center gap-6 flex-wrap max-w-[20em] lg:max-w-full">
        <FaHtml5
          className={`text-orange w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ${style}`}
          title="HTML"
        />
        <FaCss3
          className={`text-lightblue w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ${style}`}
          title="CSS"
        />
        <FaJs
          className={`text-yellow w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ${style}`}
          title="JavaScript"
        />
        <FaReact
          className={`text-lightblue w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ${style}`}
          title="React"
        />
        <SiRedux
          className={`text-lightblue w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ${style}`}
          title="Redux"
        />
        <SiRuby
          className={`text-red w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ${style}`}
          title="Ruby"
        />
        <SiRubyonrails
          className={`text-red w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ${style}`}
          title="Rails"
        />
        <SiPostgresql
          className={`text-lightblue w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ${style}`}
          title="Postgresql"
        />
        <SiMysql
          className={`text-lightblue w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ${style}`}
          title="Mysql"
        />
        <FaSass
          className={`text-red w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ${style}`}
          title="Sass"
        />
        <FaBootstrap
          className={`text-purple w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ${style}`}
          title="Bootstrap"
        />
        <SiTypescript
          className={`text-lightblue w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ${style}`}
          title="TypeScript"
        />
      </div>
    </div>
  );
};

export default Home;
