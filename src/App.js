import Articles from './Components/Articles';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Projects from './Components/Projects';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="flex font-nunito">
      <SideBar />
      <div className="w-[80%] absolute left-[20%]">
        <Home />
        <Projects />
        <Articles />
        <Contact />
      </div>
    </div>
  );
}

export default App;
