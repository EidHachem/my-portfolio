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
  return (
    <div className="h-[100vh] w-[100%]  flex flex-col justify-center items-center gap-8 text-center">
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
        <FaHtml5 className="text-orange w-[50px] h-[50px] animate-pulse" />
        <FaCss3 className="text-lightblue w-[50px] h-[50px] animate-pulse" />
        <FaJs className="text-yellow w-[50px] h-[50px] animate-pulse" />
        <FaReact className="text-lightblue w-[50px] h-[50px] animate-pulse" />
        <SiRedux className="text-lightblue w-[50px] h-[50px] animate-pulse" />
        <SiRuby className="text-red w-[50px] h-[50px] animate-pulse" />
        <SiRubyonrails className="text-red w-[50px] h-[50px] animate-pulse" />
        <SiPostgresql className="text-lightblue w-[50px] h-[50px] animate-pulse" />
        <SiMysql className="text-lightblue w-[50px] h-[50px] animate-pulse" />
        <FaSass className="text-red w-[50px] h-[50px] animate-pulse" />
        <FaBootstrap className="text-purple w-[50px] h-[50px] animate-pulse" />
        <SiTypescript className="text-lightblue w-[50px] h-[50px] animate-pulse" />
      </div>
    </div>
  );
};

export default Home;
