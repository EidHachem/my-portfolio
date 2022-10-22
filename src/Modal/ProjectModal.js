import React from 'react';
import { createPortal } from 'react-dom';
import classes from './projectModal.module.css';
import Carousel from 'nuka-carousel/lib/carousel';
import '../index.css';

const ProjectModal = ({ data, close }) => {
  const { name, description, images, technologies, url, code, id } = data;
  return createPortal(
    <>
      <div className={classes.overlay} role="presentation" onClick={close}></div>
      <div className={classes.modal} key={id}>
        <button
          onClick={close}
          className="bg-orange text-yellow fixed right-[-25px] top-0 p-1 px-5 rotate-45 rounded">
          <span className="font-bold text-beige">Close</span>
        </button>
        <h2 className="text-center text-xl font-handlee mb-1 md:text-3xl font-bold text-purple">
          {name}
        </h2>
        <div className="w-[90%] mx-auto">
          <Carousel
            wrapAround={true}
            autoplay={true}
            className="h-[100%] m-auto rounded border-2 border-blue bg-gray"
            pauseOnHover={true}
            swiping={true}
            withoutControls={false}
            slidesToShow={1}
            animation="fade"
            cellAlign="center"
            defaultControlsConfig={{
              nextButtonText: '>',
              nextButtonStyle: {
                border: 'none',
                borderTopLeftRadius: '0.5rem',
                borderBottomLeftRadius: '0.5rem',
                background: 'rgba(0, 0, 0, 0.5)',
                color: '#eae2b7',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                padding: '0.4rem 2rem',
              },
              prevButtonText: '<',
              prevButtonStyle: {
                border: 'none',
                borderTopRightRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem',
                background: 'rgba(0, 0, 0, 0.5)',
                color: '#eae2b7',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                padding: '0.4rem 2rem',
              },
            }}>
            {images.map((imageUrl) => (
              <img
                key={imageUrl}
                src={imageUrl}
                alt={name}
                className="w-max h-[15em] m-auto xl:h-[20em]"
              />
            ))}
          </Carousel>
        </div>
        <p className="text-center mt-3 px-3 text-sm lg:text-base">{description}</p>
        <div className="flex justify-center items-start gap-10 mb-5 lg:mt-5">
          <div>
            <p className="text-center mb-3">Built with:</p>
            <ul className="flex flex-wrap gap-2 items-center justify-center">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="bg-lightblue text-beige p-1 rounded min-w-[4em] text-center px-3">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-beige mr-2 mb-2 bg-blue">
            Live Demo
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-beige mr-2 mb-2 bg-purple">
            Source Code
          </a>
        </div>
      </div>
    </>,
    document.getElementById('popup'),
  );
};

export default ProjectModal;
