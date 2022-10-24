import React, { useEffect } from 'react';
import { FaAngellist, FaGithub, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';
import AccordionSection from './AccordionSection';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const divVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      type: 'spring',
      stiffness: 180,
    },
  },
};

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div
      id="about"
      className="min-h-[100vh] w-[100%] flex flex-col justify-center items-center gap-8 text-center bg-gainsboro py-5 px-7 md:min-h-fit md:pt-28 lg:px-0 lg:pt-20 xl:pt-24 xl:min-h-[100vh]">
      <h2 className="text-center lg:mb-30 text-purple font-extrabold text-4xl font-handlee lg:text-5xl">
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
      <div className="flex flex-col items-center justify-center gap-5 mt-10">
        <p className="font-semibold underline underline-offset-2 text-[14px] md:text-[16px] xl:text-lg text-blue">
          Follow me on social media to see my latest projects and updates.
        </p>
        <motion.div
          ref={ref}
          variants={divVariants}
          initial="hidden"
          animate={controls}
          className="flex justify-center items-center gap-6 flex-wrap max-w-[20em] md:max-w-lg
          lg:max-w-full lg:mt-8">
          <div className="flex flex-col justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              href="https://github.com/EidHachem"
              target="_blank"
              rel="noreferrer">
              <FaGithub className="text-3xl text-gray bg-blue xl:text-6xl" />
            </motion.a>
            <p className="text-[14px] md:text-[16px] lg:text-lg">Github</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <motion.a
              // ref={ref}
              // animate={controls}
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              href="https://www.linkedin.com/in/eid-hachem/"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin className="text-3xl text-lightblue xl:text-6xl" />
            </motion.a>
            <p className="text-[14px] md:text-[16px] lg:text-lg">LinkedIn</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <motion.a
              // ref={ref}
              // animate={controls}
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              href="https://twitter.com/eidHachem1"
              target="_blank"
              rel="noreferrer">
              <FaTwitter className="text-3xl text-twitter xl:text-6xl" />
            </motion.a>
            <p className="text-[14px] md:text-[16px] lg:text-lg">Twitter</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <motion.a
              // ref={ref}
              // animate={controls}
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              href="https://medium.com/@eidhachem1"
              target="_blank"
              rel="noreferrer">
              <FaMedium className="text-3xl xl:text-6xl" />
            </motion.a>
            <p className="text-[14px] md:text-[16px] lg:text-lg">Medium</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <motion.a
              // ref={ref}
              // animate={controls}
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              href="https://angel.co/u/eid-hachem"
              target="_blank"
              rel="noreferrer">
              <FaAngellist className="text-3xl xl:text-6xl" />
            </motion.a>
            <p className="text-[14px] md:text-[16px] lg:text-lg">AngelList</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
