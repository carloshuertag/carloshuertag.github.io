import SkillItem from "../../interfaces/SkillItem";

const bgClasses: string[] = [
  "fill",
  "primary",
  "primary-container",
  "secondary",
  "secondary-container",
  "tertiary",
  "tertiary-container",
];

const SkillCard = ({ skill }: { skill: SkillItem }) => {
  const bgClass = bgClasses[skill.index % bgClasses.length];
  return (
    <article className={"round ".concat(bgClass)}>
      <h6>{skill.title}</h6>
      {skill.skills.map(({ index, name, href, years }) => (
        <a
          className='row transparent wave round'
          key={index}
          {...(href && { target: "_blank", rel: "noreferrer", href })}
        >
          <div className='max wrap'>
            <div>{name}</div>
            {years && <label>{years} years</label>}
          </div>
          {href && (
            <button className='small circle transparent'>
              <i>open_in_new</i>
            </button>
          )}
        </a>
      ))}
    </article>
  );
};

export default SkillCard;
