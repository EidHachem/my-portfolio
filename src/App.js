import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useState, createContext, useEffect } from 'react';
import Articles from './Components/Articles';
import Contact from './Components/Contact';
import Home from './Components/Home';
import MobileMenu from './Components/MobileMenu';
import Projects from './Components/Projects';
import SideBar from './Components/SideBar';
import { db } from './firebase/firebase.config';
import { Bars } from 'react-loader-spinner';
import About from './Components/About';

export const ProjectsContext = createContext();

function App() {
  const projectsCollection = collection(db, 'projects');
  const [projects, setProjects] = useState();
  const [loader, setLoader] = useState(true);

  const getProjects = async () => {
    const data = await getDocs(query(projectsCollection, orderBy('createdAt', 'desc')));
    let projects = [];
    data.docs.forEach((doc) => {
      projects.push({ ...doc.data(), id: doc.id });
    });
    setProjects(projects);
  };

  useEffect(() => {
    getProjects();
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 2500);
    }
  }, [loader]);

  if (loader) {
    return (
      <div className="flex justify-center items-center bg-lightBlue min-h-[100vh]">
        <Bars
          height="80"
          width="80"
          color="#003049"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <ProjectsContext.Provider value={projects}>
      <div className="flex font-nunito z-20">
        <SideBar />
        <div className="w-[100%] absolute xl:left-[20%] xl:w-[80%] z-20">
          <MobileMenu />
          <div id="wrapper">
            <Home />
            <Projects />
            <About />
            <Articles />
            <Contact />
          </div>
        </div>
      </div>
    </ProjectsContext.Provider>
  );
}

export default App;
