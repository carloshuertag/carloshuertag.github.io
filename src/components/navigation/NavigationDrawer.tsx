import NavItems from "./NavItems";

const NavigationDrawer = () => {
  return (
    <nav className='l left drawer fixed-drawer transparent small-blur'>
      <header>
        <span className='large-text bold'>Carlos Huerta García</span>
      </header>
      <NavItems />
      <div className='space'></div>
      <button className='responsive round extra' data-ui='#rightContact'>
        <i>person_add</i>
        <span>Contact me</span>
      </button>
    </nav>
  );
};

export default NavigationDrawer;
