import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import { GiSkills, GiBrain } from 'react-icons/gi';
import { FaFileCode, FaTools } from 'react-icons/fa';
import { MdDraw, MdQuiz, MdDeveloperMode } from 'react-icons/md';
import { BiGitBranch } from 'react-icons/bi';
import { FcDeployment } from 'react-icons/fc';

const AccordionSection = () => {
  return (
    <Accordion className="w-[95%] lg:w-[60%] lg:mt-20" preExpanded={['a']}>
      <AccordionItem uuid="a">
        <AccordionItemHeading>
          <AccordionItemButton className="bg-blue text-beige relative text-sm py-3 lg:text-lg">
            Languages and Frameworks
            <FaFileCode id="skills" className="text-beige absolute left-3 top-4 lg:top-5" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-lightBlue text-blue py-5">
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center gap-1 lg:gap-2">
              <MdDraw className="text-xl text-orange lg:text-4xl" />
              <p className="text-sm font-bold lg:text-lg">Front-end</p>
              <div className=" max-h-[6em] w-[80%] mt-5 grid grid-cols-2 items-center gap-2">
                <p className="text-xs lg:text-sm">HTML</p>
                <p className="text-xs lg:text-sm">CSS</p>
                <p className="text-xs lg:text-sm">Sass</p>
                <p className="text-xs lg:text-sm">Bootstrap</p>
                <p className="text-xs lg:text-sm">Tailwind</p>
                <p className="text-xs lg:text-sm">JavaScript</p>
                <p className="text-xs lg:text-sm">React</p>
                <p className="text-xs lg:text-sm">Redux</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 lg:gap-2">
              <GiBrain className="text-xl text-orange lg:text-4xl" />
              <p className="text-sm font-bold lg:text-lg">Back-end</p>
              <div className="max-h-[6em] w-[80%] mt-5 grid grid-cols-2 items-center gap-2">
                <p className="text-xs lg:text-sm">Ruby</p>
                <p className="text-xs lg:text-sm">Postgres</p>
                <p className="text-xs lg:text-sm">MySql</p>
                <p className="text-xs lg:text-sm">FireBase</p>
                <p className="text-xs lg:text-sm">Ruby on Rails</p>
              </div>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className="bg-blue text-beige relative text-sm py-3 lg:text-lg">
            Development tools
            <FaTools id="frameworks" className="text-beige absolute left-3 top-4 lg:top-5" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-lightBlue text-blue py-5">
          <div className="grid grid-cols-2 gap-y-3">
            <div className="flex flex-col items-center gap-1 lg:gap-2">
              <BiGitBranch className="text-xl text-orange lg:text-4xl" />
              <p className="text-sm font-bold lg:text-lg">Version Control</p>
              <div className="max-h-[6em] w-[80%] mt-2 grid grid-cols-2 items-center gap-2 lg:mt-5">
                <p className="text-xs lg:text-sm">Git</p>
                <p className="text-xs lg:text-sm">Github</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MdQuiz className="text-xl text-orange lg:text-4xl" />
              <p className="text-sm font-bold lg:text-lg">Testing</p>
              <div className="max-h-[6em] w-[80%] mt-2 grid grid-cols-2 items-center gap-2 lg:mt-5">
                <p className="text-xs lg:text-sm">Jest</p>
                <p className="text-xs lg:text-sm">Rspec</p>
                <p className="text-xs lg:text-sm">React Testing</p>
                <p className="text-xs lg:text-sm">Bullet</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FcDeployment className="text-xl text-orange lg:text-4xl" />
              <p className="text-sm font-bold lg:text-lg">Deployment</p>
              <div className="max-h-[6em] w-[80%] mt-2 grid grid-cols-2 items-center gap-2 lg:mt-5">
                <p className="text-xs lg:text-sm">Heroku</p>
                <p className="text-xs lg:text-sm">Netlify</p>
                <p className="text-xs lg:text-sm">Vercel</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MdDeveloperMode className="text-xl text-orange lg:text-4xl" />
              <p className="text-sm font-bold lg:text-lg">Development</p>
              <div className="max-h-[6em] w-[80%] mt-2 grid grid-cols-2 items-center gap-2 lg:mt-5">
                <p className="text-xs lg:text-sm">Mobile first</p>
                <p className="text-xs lg:text-sm">Responsive design</p>
                <p className="text-xs lg:text-sm">TDD</p>
              </div>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className="bg-blue text-beige relative text-sm py-3 lg:text-lg">
            Soft skills
            <GiSkills id="languages" className="text-beige absolute left-3 top-4 lg:top-5" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-lightBlue text-blue py-5">
          <div className="grid grid-cols-2 gap-3">
            <p className="text-xs lg:text-lg font-bold">Problem solving</p>
            <p className="text-xs lg:text-lg font-bold">Communication</p>
            <p className="text-xs lg:text-lg font-bold">Self-learning</p>
            <p className="text-xs lg:text-lg font-bold">Time management</p>
            <p className="text-xs lg:text-lg font-bold">Adaptability</p>
            <p className="text-xs lg:text-lg font-bold">Collaboration</p>
            <p className="text-xs lg:text-lg font-bold">Pair programming</p>
            <p className="text-xs lg:text-lg font-bold">Mentoring</p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionSection;
