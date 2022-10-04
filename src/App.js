import Home from './Components/Home';
import Projects from './Components/Projects';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="flex font-nunito">
      <SideBar />
      <div className="w-[100%] absolute left-40">
        <Home />
        <Projects />
      </div>
    </div>
  );
}

export default App;
