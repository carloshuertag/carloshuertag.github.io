import Contact from "../content/Contact";
import NavItems from "./NavItems";

const NavigationRail = () => {
  return (
    <>
      <nav className='m left fill'>
        <header>
          <span className='large-text bold'>Carlos Huerta García</span>
        </header>
        <NavItems />
        <button data-ui='#rightContact' className='square round extra'>
          <i>person_add</i>
        </button>
      </nav>
      <div className='overlay blur'></div>
      <dialog className='right' id='rightContact'>
        <nav>
          <button data-ui='#rightContact' className='circle transparent'>
            <i>arrow_back</i>
          </button>
          <h3>Contact</h3>
        </nav>
        <Contact />
      </dialog>
    </>
  );
};

export default NavigationRail;
