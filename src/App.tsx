import BottomAppBar from "./components/navigation/BottomAppBar";
import NavigationDrawer from "./components/navigation/NavigationDrawer";
import NavigationRail from "./components/navigation/NavigationRail";

const App = () => {
  const showContactPane = () => {
    document.getElementById("mainContact")?.classList.add("active");
  };
  const hideContactPane = () => {
    document.getElementById("mainContact")?.classList.remove("active");
  };
  return (
    <>
      <BottomAppBar />
      <NavigationRail />
      <NavigationDrawer contactPaneExpander={showContactPane} />
      <main className='responsive'>
        <div className='grid'>
          <section className='s12 l6 page active'>
            <h1>Hello World!</h1>
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
