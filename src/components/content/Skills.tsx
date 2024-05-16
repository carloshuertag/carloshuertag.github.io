import SkillsData from "../../data/skills.json";
import SkillItem from "../../interfaces/SkillItem";
import SkillCard from "./SkillCard";

const skillsItems: SkillItem[] = SkillsData;

const Skills = () => {
  return (
    <div className='grid anchor' id='skills'>
      {skillsItems.map((skill) => (
        <div className='s6 m4 l3' key={skill.index}>
          <SkillCard skill={skill} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
