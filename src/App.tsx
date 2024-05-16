import "./App.css";
import BioCard from "./components/content/BioCard/BioCard";
import Education from "./components/content/Education";
import Experience from "./components/content/ExperienceCarousel/ExperienceCarousel";
import Skills from "./components/content/Skills/Skills";
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
          <section className='s12 page bottom active'>
            <div className='large-divider'></div>
            <article className='primary round responsive bottom-margin'>
              All displayed photos were taken by yours truly. Carlos Huerta
              Garcia&apos;s portfolio is licensed under{" "}
              <a
                className='inverse-link'
                href='https://www.gnu.org/licenses/gpl-3.0.html'
                target='_blank'
                rel='noreferrer'
              >
                GPL v3 License.
              </a>
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
