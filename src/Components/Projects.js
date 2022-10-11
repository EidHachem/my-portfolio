import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase.config';

const Projects = () => {
  const projectsCollection = collection(db, 'projects');
  const [project, setProject] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(query(projectsCollection, orderBy('createdAt', 'desc')));
      let projects = [];
      data.docs.forEach((doc) => {
        projects.push({ ...doc.data(), id: doc.id });
      });
      setProject(projects);
    };

    getUsers();
  }, []);

  return (
    <div className="w-[100%] h-[100vh] bg-lightBlue py-5">
      <h2 className="text-center pt-20 mb-20 text-purple font-extrabold text-6xl font-handlee">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-y-20 gap-x-20">
        {project &&
          project.map((project) => (
            <div
              key={project.id}
              className="max-w-md rounded overflow-hidden shadow-lg bg-opacity-40 border-spacing-6 border-blue border-2 bg-gainsboro h-[31em]">
              <img src={project.images[0]} alt={project.name} className="w-max h-64" />
              <div className="p-3">
                <h3 className="font-bold text-xl mb-2 text-center mt-2">{project.name}</h3>
                <p className="text-gray-700 text-center mb-2">{project.description}</p>
                <p className="text-center mb-2 text-blue text-lg font-bold">Built with: </p>
                <ul className="flex justify-center items-center gap-5">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="bg-orange rounded text-beige p-1 w-20 text-center">
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
