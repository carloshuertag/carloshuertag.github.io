const NavItems = () => {
  const goTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  return (
    <>
      <a
        onClick={() => {
          goTo("me");
        }}
      >
        <i>person</i>
        <span>Me</span>
      </a>
      <a
        onClick={() => {
          goTo("education");
        }}
      >
        <i>school</i>
        <span>Education</span>
      </a>
      <a
        onClick={() => {
          goTo("experience");
        }}
      >
        <i>work</i>
        <span>Experience</span>
      </a>
      <a
        onClick={() => {
          goTo("skills");
        }}
      >
        <i>exercise</i>
        <span>Skills</span>
      </a>
    </>
  );
};

export default NavItems;
