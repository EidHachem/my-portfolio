import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useState, createContext, useEffect } from 'react';
import Articles from './Components/Articles';
import Contact from './Components/Contact';
import Home from './Components/Home';
import MobileMenu from './Components/MobileMenu';
import Projects from './Components/Projects';
import SideBar from './Components/SideBar';
import { db } from './firebase/firebase.config';

export const ProjectsContext = createContext();

function App() {
  const projectsCollection = collection(db, 'projects');
  const [projects, setProjects] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(query(projectsCollection, orderBy('createdAt', 'desc')));
      let projects = [];
      data.docs.forEach((doc) => {
        projects.push({ ...doc.data(), id: doc.id });
      });
      setProjects(projects);
    };

    getUsers();
  }, []);

  return (
    <ProjectsContext.Provider value={projects}>
      <div className="flex font-nunito z-20">
        <SideBar />
        <div className="w-[100%] absolute lg:left-[20%] lg:w-[80%] z-20">
          <MobileMenu />
          <Home />
          <Projects />
          <Articles />
          <Contact />
        </div>
      </div>
    </ProjectsContext.Provider>
  );
}

export default App;
