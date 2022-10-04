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
  const style = 'w-[50px] h-[50px] animate-pulse hover:animate-none';

  return (
    <div className="h-[100vh] w-[100%] flex flex-col justify-center items-center gap-8 text-center bg-beige">
      <img
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        alt="Eid"
        className="h-52 w-52 rounded-full"
      />
      <h3 className="text-4xl font-medium">Hello I'm</h3>
      <h1 className="text-7xl font-semibold font-handlee text-blue">Eid Hachem</h1>
      <p className="max-w-screen-md">
        Let me tell you few things about me...
        <br /> I'm a business school graduate, I found my passion into programming the first time I
        was introduced to Java in an elective university class, After a while I started
        self-studying web development, and joined Microverse bootcamp to learn more about the field
        in a pair programming way that they offered. Now I am a full-stack web developer who is
        ready to start a new career that's filled with passion and opportunities.
      </p>
      <Socials />
      <div className="flex justify-center items-center gap-6">
        <FaHtml5 className={`text-orange ${style}`} title="HTML" />
        <FaCss3 className={`text-lightblue ${style}`} title="CSS" />
        <FaJs className={`text-yellow ${style}`} title="JavaScript" />
        <FaReact className={`text-lightblue ${style}`} title="React" />
        <SiRedux className={`text-lightblue ${style}`} title="Redux" />
        <SiRuby className={`text-red ${style}`} title="Ruby" />
        <SiRubyonrails className={`text-red ${style}`} title="Rails" />
        <SiPostgresql className={`text-lightblue ${style}`} title="Postgresql" />
        <SiMysql className={`text-lightblue ${style}`} title="Mysql" />
        <FaSass className={`text-red ${style}`} title="Sass" />
        <FaBootstrap className={`text-purple ${style}`} title="Bootstrap" />
        <SiTypescript className={`text-lightblue ${style}`} title="TypeScript" />
      </div>
    </div>
  );
};

export default Home;
