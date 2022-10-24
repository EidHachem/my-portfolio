import React, { useContext, useState } from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import { ProjectsContext } from '../App';
import ProjectModal from '../Modal/ProjectModal';
import { InfinitySpin } from 'react-loader-spinner';
import { motion } from 'framer-motion';

const FeaturedCarousel = () => {
  const projects = useContext(ProjectsContext);
  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState();
  const featuredProjects = projects.filter((project) => project.featured === 'true');

  if (!projects) {
    return (
      <div className="flex justify-center items-center">
        <InfinitySpin width="200" color="#eae2b7" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Carousel
        wrapAround={true}
        autoplay={true}
        autoplayInterval={5000}
        style={{ width: '60%', height: '100%', margin: '0 auto' }}
        pauseOnHover={true}
        swiping={false}
        withoutControls={true}
        className="cursor-pointer md:hidden xl:block">
        {featuredProjects.map((project) => (
          <div key={project.id}>
            <img
              src={project.images[0]}
              alt={project.name}
              loading="lazy"
              className="w-max h-40 m-auto rounded"
              onClick={() => {
                setOpenModal(true);
                project && setProject(project);
                document.body.style.overflow = 'hidden';
              }}
            />
            <p className="text-center">{project.name}</p>
          </div>
        ))}
      </Carousel>
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
  );
};

export default FeaturedCarousel;
