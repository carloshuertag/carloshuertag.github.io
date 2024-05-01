const lightBgUrl = "/light_bg.jpg";
const darkBgUrl = "/dark_bg.jpg";

const TopAppBar = () => {
  let lightMode = true;
  let themeIconText = "dark_mode";
  let bgUrl = lightBgUrl;
  const setTheme = () => {
    const themeIcon = document.getElementById("theme_icon");
    theme(bgUrl)
      .then(() => {
        if (themeIcon) themeIcon.innerText = themeIconText;
        document.body.style.backgroundImage = `url('${bgUrl}')`;
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  };
  const toogleThemeMode = () => {
    lightMode = !lightMode;
    if (lightMode) {
      themeIconText = "dark_mode";
      document.body.classList.replace("dark", "light");
      bgUrl = lightBgUrl;
    } else {
      themeIconText = "light_mode";
      document.body.classList.add("dark");
      bgUrl = darkBgUrl;
    }
    setTheme();
  };
  const theme = async (from: string) => {
    await ui("theme", from);
  };
  setTheme();
  return (
    <div className='responsive fixed-top-app-bar'>
      <header className='small-blur'>
        <nav>
          <div className='max'></div>
          <button className='circle transparent' onClick={toogleThemeMode}>
            <i id='theme_icon'>{themeIconText}</i>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default TopAppBar;
