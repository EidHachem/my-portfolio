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
  console.log(projects);

  const getUsers = async () => {
    const data = await getDocs(query(projectsCollection, orderBy('createdAt', 'desc')));
    let projects = [];
    data.docs.forEach((doc) => {
      projects.push({ ...doc.data(), id: doc.id });
    });
    setProjects(projects);
  };

  useEffect(() => {
    getUsers();
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
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
        <div className="w-[100%] absolute lg:left-[20%] lg:w-[80%] z-20">
          <MobileMenu />
          <Home />
          <About />
          <Projects />
          <Articles />
          <Contact />
        </div>
      </div>
    </ProjectsContext.Provider>
  );
}

export default App;
