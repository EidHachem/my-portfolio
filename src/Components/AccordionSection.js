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
    <Accordion className="w-[90%] lg:w-[60%] lg:mt-20" preExpanded={['a']}>
      <AccordionItem uuid="a">
        <AccordionItemHeading>
          <AccordionItemButton className="bg-blue text-beige relative text-lg py-3">
            Languages and Frameworks
            <FaFileCode id="skills" className="text-beige absolute left-5 top-4" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-lightBlue text-blue py-5">
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center gap-2">
              <MdDraw className="text-4xl text-orange" />
              <p className="text-lg font-bold">Front-end</p>
              <div className=" max-h-[6em] w-[80%] mt-5 grid grid-cols-2 items-center gap-2">
                <p className="text-sm">HTML</p>
                <p className="text-sm">CSS</p>
                <p className="text-sm">Sass</p>
                <p className="text-sm">Bootstrap</p>
                <p className="text-sm">Tailwind</p>
                <p className="text-sm">JavaScript</p>
                <p className="text-sm">React</p>
                <p className="text-sm">Redux</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GiBrain className="text-4xl text-orange" />
              <p className="text-lg font-bold">Back-end</p>
              <div className="max-h-[6em] w-[80%] mt-5 grid grid-cols-2 items-center gap-2">
                <p className="text-sm">Ruby</p>
                <p className="text-sm">Ruby on Rails</p>
                <p className="text-sm">PostgreSQL</p>
                <p className="text-sm">MySql</p>
                <p className="text-sm">FireBase</p>
              </div>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className="bg-blue text-beige relative text-lg py-3">
            Development tools
            <FaTools id="frameworks" className="text-beige absolute left-5 top-4" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-lightBlue text-blue py-5">
          <div className="grid grid-cols-4">
            <div className="flex flex-col items-center gap-2">
              <BiGitBranch className="text-4xl text-orange" />
              <p className="text-lg font-bold">Version Control</p>
              <div className="max-h-[6em] w-[80%] mt-5 items-center">
                <p className="text-sm">Git</p>
                <p className="text-sm">Github</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MdQuiz className="text-4xl text-orange" />
              <p className="text-lg font-bold">Testing</p>
              <div className="max-h-[6em] w-[80%] mt-5 grid grid-cols-2 items-center gap-2">
                <p className="text-sm">Jest</p>
                <p className="text-sm">React Testing</p>
                <p className="text-sm">Rspec</p>
                <p className="text-sm">Bullet</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FcDeployment className="text-4xl text-orange" />
              <p className="text-lg font-bold">Deployment</p>
              <div className="max-h-[6em] w-[80%] mt-5 items-center">
                <p className="text-sm">Heroku</p>
                <p className="text-sm">Netlify</p>
                <p className="text-sm">Vercel</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MdDeveloperMode className="text-4xl text-orange" />
              <p className="text-lg font-bold">Development</p>
              <div className="max-h-[6em] w-[80%] mt-5 grid grid-cols-2 items-center gap-2">
                <p className="text-sm">Mobile first</p>
                <p className="text-sm">TDD</p>
                <p className="text-sm">Responsive design</p>
              </div>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className="bg-blue text-beige relative text-lg py-3">
            Soft skills
            <GiSkills id="languages" className="text-beige absolute left-5 top-4" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-lightBlue text-blue py-5">
          <div className="grid grid-cols-2">
            <p className="text-lg font-bold">Problem solving</p>
            <p className="text-lg font-bold">Communication</p>
            <p className="text-lg font-bold">Self-learning</p>
            <p className="text-lg font-bold">Time management</p>
            <p className="text-lg font-bold">Adaptability</p>
            <p className="text-lg font-bold">Collaboration</p>
            <p className="text-lg font-bold">Pair programming</p>
            <p className="text-lg font-bold">Mentoring</p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionSection;
