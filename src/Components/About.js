import React from 'react';
import AccordionSection from './AccordionSection';

const About = () => {
  return (
    <div
      id="about"
      className="min-h-[100vh] w-[100%] flex flex-col justify-center items-center gap-8 text-center bg-gainsboro px-7 md:min-h-fit md:pt-28 lg:px-0 lg:pt-0 lg:min-h-[100vh]">
      <h2 className="text-center lg:mb-30 text-purple font-extrabold text-4xl font-handlee lg:text-7xl">
        About me
      </h2>
      <p className="max-w-screen-md text-[14px] md:text-[16px] md:px-24 md:mb-10 lg:mb-0 lg:px-0 lg:text-lg">
        Let me tell you few things about me...
        <br /> I'm a business school graduate, I found my passion into programming the first time I
        was introduced to Java in an elective university class, After a while I started
        self-studying web development, and joined Microverse bootcamp to learn more about the field
        in a pair programming way that they offered. Now I am a full-stack web developer who is
        ready to start a new career that's filled with passion and opportunities.
      </p>
      <AccordionSection />
    </div>
  );
};

export default About;
