import React, { useContext, useEffect, useState } from 'react';
import { ProjectsContext } from '../App';
import ProjectModal from '../Modal/ProjectModal';
import { InfinitySpin } from 'react-loader-spinner';
import FilterForm from './FilterForm';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const prejectVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 180,
    },
  },
};

const Projects = () => {
  const [project, setProject] = useState();
  const [openModal, setOpenModal] = useState(false);
  const projects = useContext(ProjectsContext);
  const [pages, setPages] = useState(4);
  const [hideSeeMore, setHideSeeMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  const [filter, setFilter] = useState();

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const filteredProjects = projects.filter((project) => project.stackType !== filter);

  if (!filteredProjects) {
    return (
      <div className="w-[100%] min-h-[100vh] bg-gainsboro py-5 px-5 lg:px-0">
        <h2 className="text-center pt-20 mb-20 text-purple font-extrabold text-4xl font-handlee lg:text-7xl">
          Projects
        </h2>
        <div className="flex justify-center items-center">
          <InfinitySpin width="200" color="#003049" />
        </div>
      </div>
    );
  }

  if (filteredProjects.length === 0) {
    return (
      <div className="w-[100%] min-h-[100vh] bg-gainsboro py-5 px-5 lg:px-0">
        <h2 className="text-center pt-20 mb-20 text-purple font-extrabold text-4xl font-handlee lg:text-7xl">
          Projects
        </h2>
        <div className="flex justify-center items-center">
          <FilterForm filter={filter} setFilter={setFilter} />
        </div>
        <div className="flex justify-center items-center">
          <h4 className="text-center text-blue font-extrabold text-2xl mt-20 lg:text-4xl">
            No projects available at the moment.
          </h4>
        </div>
      </div>
    );
  }

  return (
    <div
      id="projects"
      className="w-[100%] min-h-[100vh] bg-gainsboro py-2 px-5 md:min-h-fit md:pt-28 lg:px-0 xl:py-5 xl:pt-20">
      <h2 className="text-center pt-10 mb-10 text-purple font-extrabold text-4xl font-handlee lg:text-5xl lg:mb-20 lg:pt-0">
        Projects
      </h2>
      <div className="flex justify-center items-center">
        <FilterForm filter={filter} setFilter={setFilter} />
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={prejectVariants}
        className="flex flex-wrap justify-center items-center gap-y-10 gap-x-20 xl:gap-y-20 xl:gap-x-36">
        {filteredProjects &&
          filteredProjects.slice(0, pages).map((project) => (
            <div
              key={project.id}
              className="max-w-md rounded overflow-hidden shadow-lg bg-opacity-40 border-spacing-6 border-blue border-2 bg-lightGray h-[31em] md:w-[50%] xl:w-[40%]">
              <img
                src={project.images[0]}
                alt={project.name}
                loading="lazy"
                className="w-max h-52 lg:h-64"
              />
              <div className="p-3">
                <h3 className="font-bold text-xl mb-2 text-center mt-2">{project.name}</h3>
                <p className="text-center mb-2">{project.description.substring(0, 49)}...</p>
                <p className="text-center mb-2 text-blue text-lg font-bold">Built with: </p>
                <ul className="flex justify-center flex-wrap items-center gap-2 lg:flex-nowrap">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="bg-orange rounded text-beige p-1 min-w-fit text-center text-sm lg:text-base">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="bg-blue text-beige text-center py-1 px-10 rounded mt-8 lg:text-lg"
                    onClick={() => {
                      setOpenModal(true);
                      setProject(project);
                      document.body.style.overflow = 'hidden';
                    }}>
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        {openModal && (
          <ProjectModal
            data={project}
            close={() => {
              setOpenModal(false);
              document.body.style.overflow = 'visible';
            }}
          />
        )}
      </motion.div>
      {filteredProjects.length > 4 && !hideSeeMore && (
        <div className="flex justify-center mt-4 lg:mt-24">
          <button
            type="button"
            id="show-more"
            className="bg-blue text-beige text-center p-2 rounded scroll-mt-[70vh]"
            onClick={() => {
              filteredProjects.length > 4 && setPages(filteredProjects.length);
              setHideSeeMore(!hideSeeMore);
              setShowLess(!showLess);
            }}>
            Show More
          </button>
        </div>
      )}

      {showLess && filteredProjects.length > 0 && (
        <div className="flex justify-center mt-4 lg:mt-24">
          <a
            href="/#show-more"
            className="bg-blue text-beige text-center p-2 rounded"
            onClick={() => {
              setPages(4);
              setShowLess(!showLess);
              setHideSeeMore(!hideSeeMore);
            }}>
            Show Less
          </a>
        </div>
      )}
    </div>
  );
};

export default Projects;
