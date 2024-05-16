import "./App.css";
import BioCard from "./components/content/BioCard/BioCard";
import Education from "./components/content/Education";
import Experience from "./components/content/ExperienceCarousel/ExperienceCarousel";
import Skills from "./components/content/Skills";
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
          <section className='s12 page top active'>
            <BioCard />
            <Education />
          </section>
          <section className='s12 page left active'>
            <Experience />
          </section>
          <section className='s12 page bottom active'>
            <Skills />
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
