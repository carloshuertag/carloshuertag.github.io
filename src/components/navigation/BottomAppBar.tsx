import Contact from "../content/Contact";
import NavItems from "./NavItems";

const BottomAppBar = () => {
  return (
    <>
      <nav className='s bottom'>
        <NavItems />
        <a data-ui='#bottomContact'>
          <button className='square round extra'>
            <i>person_add</i>
          </button>
        </a>
      </nav>
      <div className='overlay blur'></div>
      <dialog className='bottom' id='bottomContact'>
        <Contact />
      </dialog>
    </>
  );
};

export default BottomAppBar;
