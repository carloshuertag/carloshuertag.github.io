const lightBgUrl = "/light_bg.jpg";
const darkBgUrl = "/dark_bg.jpg";

const TopAppBar = () => {
  let lightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
  let isLoading = true;
  let themeIconText = "dark_mode";
  let bgUrl = lightBgUrl;
  const setLoading = (loading: boolean) => {
    if (isLoading) {
      document.getElementById("loadingBg")?.classList.remove("active");
      document.getElementById("loading")?.classList.remove("active");
    } else {
      document.getElementById("loadingBg")?.classList.add("active");
      document.getElementById("loading")?.classList.add("active");
    }
    isLoading = loading;
  };
  const updateThemeMode = () => {
    if (lightMode) {
      themeIconText = "dark_mode";
      bgUrl = lightBgUrl;
      document.body.classList.replace("dark", "light");
    } else {
      themeIconText = "light_mode";
      bgUrl = darkBgUrl;
      document.body.classList.add("dark");
    }
  };
  const setTheme = () => {
    const themeIcon = document.getElementById("theme_icon");
    updateThemeMode();
    theme(bgUrl)
      .then(() => {
        if (themeIcon) themeIcon.innerText = themeIconText;
        document.body.style.backgroundImage = `url('${bgUrl}')`;
        document.documentElement.style.setProperty(
          "background-color",
          "--var(background);"
        );
      })
      .catch((error: unknown) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const toogleThemeMode = () => {
    setLoading(true);
    lightMode = !lightMode;
    updateThemeMode();
    setTheme();
  };
  const theme = async (from: string) => {
    await ui("theme", from);
  };
  setTheme();
  return (
    <>
      <header className='responsive fixed fixed-top-app-bar small-blur'>
        <nav>
          <div className='max'></div>
          <button className='circle transparent' onClick={toogleThemeMode}>
            <i id='theme_icon'>{themeIconText}</i>
          </button>
        </nav>
      </header>
      <div className='overlay blur active' id='loadingBg'></div>
      <dialog className='active center-align center middle' id='loading'>
        <progress className='circle large' />
        <h5 className='center-align center'>Loading...</h5>
        <p>Please wait a few seconds.</p>
      </dialog>
    </>
  );
};

export default TopAppBar;
