import "./App.css";
import BioCard from "./components/content/BioCard/BioCard";
import Education from "./components/content/Education";
import BottomAppBar from "./components/navigation/BottomAppBar";
import NavigationDrawer from "./components/navigation/NavigationDrawer";
import NavigationRail from "./components/navigation/NavigationRail";
import TopAppBar from "./components/navigation/TopAppBar";

const App = () => {
  return (
    <>
      <BottomAppBar />
      <NavigationRail />
      <NavigationDrawer />
      <TopAppBar />
      <main className='responsive'>
        <div className='grid main-container'>
          <section className='s12 l12 page active' id='mainContent'>
            <BioCard />
            <Education />
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
