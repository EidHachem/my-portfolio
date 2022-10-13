import React, { useContext, useState } from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import { ProjectsContext } from '../App';
import ProjectModal from '../Modal/ProjectModal';

const FeaturedCarousel = () => {
  const projects = useContext(ProjectsContext);
  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState();

  return (
    <div>
      <Carousel
        wrapAround={true}
        autoplay={true}
        style={{ width: '60%', height: '100%', margin: '0 auto' }}
        pauseOnHover={true}
        swiping={false}
        withoutControls={true}
        slidesToShow={1}
        className="cursor-pointer">
        {projects.map((project) =>
          project.images.map((imageUrl) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt={project.name}
              className="w-max h-40 m-auto rounded"
              onClick={() => {
                setOpenModal(true);
                project && setProject(project);
                document.body.style.overflow = 'hidden';
              }}
            />
          )),
        )}
        {openModal && (
          <ProjectModal
            data={project}
            close={() => {
              setOpenModal(false);
              document.body.style.overflow = 'visible';
            }}
          />
        )}
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
