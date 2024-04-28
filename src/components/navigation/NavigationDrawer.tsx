import NavItems from "./NavItems";

const NavigationDrawer = ({
  contactPaneExpander,
}: {
  contactPaneExpander: () => void;
}) => {
  return (
    <>
      <nav className='l left drawer'>
        <header>
          <span className='large-text bold'>Carlos Huerta García</span>
        </header>
        <NavItems />
        <a>
          <button
            className='responsive round extra'
            onClick={contactPaneExpander}
          >
            <i>person_add</i>
            <span>Contact</span>
          </button>
        </a>
      </nav>
    </>
  );
};

export default NavigationDrawer;
