import React from 'react';
import { FaGithub, FaAngellist, FaLinkedin, FaTwitter, FaHome, FaBookOpen } from 'react-icons/fa';
import { SiAboutdotme } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { TbMessageCircle } from 'react-icons/tb';
import Carousel from 'nuka-carousel/lib/carousel';

const SideBar = () => {
  return (
    <div className="h-[100vh] w-[25vw] flex-col justify-around items-center text-center font-roboto bg-blue text-beige fixed hidden md:flex">
      <div className="text-4xl">Eid Hachem</div>
      <div className="flex flex-col justify-around items-start gap-6">
        <div className="flex justify-center items-center gap-9">
          <FaHome />
          <p className="text-lg font-bold">Home</p>
        </div>
        <div className="flex justify-center items-center gap-9">
          <SiAboutdotme />
          <p className="text-lg font-bold">About</p>
        </div>
        <div className="flex justify-center items-center gap-9">
          <CgWebsite />
          <p className="text-lg font-bold">Projects</p>
        </div>
        <div className="flex justify-center items-center gap-9">
          <FaBookOpen />
          <p className="text-lg font-bold">Articles</p>
        </div>
        <div className="flex justify-center items-center gap-9">
          <TbMessageCircle />
          <p className="text-lg font-bold">Contact</p>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold mb-4">Featured</p>
        <Carousel
          wrapAround={true}
          autoplay={true}
          style={{ width: '60%', height: '100%', margin: '0 auto' }}
          pauseOnHover={true}
          swiping={false}
          withoutControls={true}
          slidesToShow={1}>
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            alt="s"
            className="rounded-2xl h-40 cursor-pointer"
          />
          <img
            src="https://static.remove.bg/remove-bg-web/36b50c4385f75bb65509f63b1e81f99fe2b334fc/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
            alt="s"
            className="rounded-2xl h-40 cursor-pointer"
          />
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="s"
            className="rounded-2xl h-40 cursor-pointer"
          />
        </Carousel>
      </div>
      <div>
        <p>
          Copyright &copy;2022 All rights reserved <br /> made with &#10084; by Eid hachem
        </p>
      </div>
      <ul className="flex justify-center align-middle gap-4">
        <li>
          <a href="https://github.com/EidHachem">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://angel.co/u/eid-hachem">
            <FaAngellist />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/eid-hachem/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/eidHachem1">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
