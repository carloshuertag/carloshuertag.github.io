import Contact from "../content/Contact";
import NavItems from "./NavItems";

const NavigationRail = () => {
  return (
    <>
      <nav className='m left'>
        <header>
          <span className='large-text bold'>Carlos Huerta García</span>
        </header>
        <NavItems />
        <a data-ui='#rightContact'>
          <button className='square round extra'>
            <i>person_add</i>
          </button>
        </a>
      </nav>
      <div className='overlay blur'></div>
      <dialog className='right' id='rightContact'>
        <h3>
          <button data-ui='#rightContact' className='circle transparent'>
            <i>arrow_back</i>
          </button>
          Contact
        </h3>
        <Contact />
      </dialog>
    </>
  );
};

export default NavigationRail;
