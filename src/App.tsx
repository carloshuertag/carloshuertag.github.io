import BioCard from "./components/content/BioCard/BioCard";
import EducationCards from "./components/content/EducationCards";
import BottomAppBar from "./components/navigation/BottomAppBar";
import NavigationDrawer from "./components/navigation/NavigationDrawer";
import NavigationRail from "./components/navigation/NavigationRail";

const App = () => {
  const showContactPane = () => {
    document.getElementById("mainContact")?.classList.add("active");
    document.getElementById("mainContent")?.classList.replace("l12", "l6");
    const educationCards = document
      .getElementById("education")
      ?.querySelectorAll(".educationCard");
    educationCards?.forEach((card) => {
      card.classList.remove("l4", "m6");
    });
  };
  const hideContactPane = () => {
    document.getElementById("mainContact")?.classList.remove("active");
    document.getElementById("mainContent")?.classList.replace("l6", "l12");
    const educationCards = document
      .getElementById("education")
      ?.querySelectorAll(".educationCard");
    educationCards?.forEach((card) => {
      card.classList.add("l4", "m6");
    });
  };
  return (
    <>
      <BottomAppBar />
      <NavigationRail />
      <NavigationDrawer contactPaneExpander={showContactPane} />
      <main className='responsive'>
        <div className='grid'>
          <section className='s12 l12 page active' id='mainContent'>
            <BioCard />
            <EducationCards />
          </section>
          <section className='l6 page right' id='mainContact'>
            <h3>
              <button className='circle transparent' onClick={hideContactPane}>
                <i>close</i>
              </button>
              Contact
            </h3>
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
