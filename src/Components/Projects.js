import React from 'react';

const Projects = () => {
  const arr = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image:
        'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
      builtWith: ['React', 'Node', 'MongoDB'],
      sourceCode: 'https://any.com',
      liveDemo: 'https://any.com',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image:
        'https://static.remove.bg/remove-bg-web/36b50c4385f75bb65509f63b1e81f99fe2b334fc/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png',
      builtWith: ['React', 'Node', 'MongoDB'],
      sourceCode: 'https://any.com',
      liveDemo: 'https://any.com',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      builtWith: ['React', 'Node', 'MongoDB'],
      sourceCode: 'https://any.com',
      liveDemo: 'https://any.com',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      builtWith: ['React', 'Node', 'MongoDB'],
      sourceCode: 'https://any.com',
      liveDemo: 'https://any.com',
    },
  ];

  return (
    <div className="w-[100%] bg-yellow py-5">
      <h2 className="text-center pt-20 mb-20 text-blue font-extrabold text-6xl font-handlee">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-x-36 gap-y-20 lg:px-52">
        {arr.map((project) => (
          <div
            key={project.id}
            className="max-w-md rounded overflow-hidden shadow-lg bg-opacity-40 border-spacing-6 border-blue border-2 bg-beige h-[31em]">
            <img src={project.image} alt={project.title} className="w-full h-64" />
            <div className="p-3">
              <h3 className="font-bold text-xl mb-2 text-center mt-2">{project.title}</h3>
              <p className="text-gray-700 text-center mb-2">{project.description}</p>
              <p className="text-center mb-2 text-blue text-lg font-bold">Built with: </p>
              <ul className="flex justify-center items-center gap-5">
                {project.builtWith.map((tech) => (
                  <li key={tech} className="bg-orange rounded text-beige p-1">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-blue text-beige text-center p-2 rounded mb-3 mt-3">
                  See More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
