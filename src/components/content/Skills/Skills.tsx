import SkillsData from "../../../data/skills.json";
import SkillItem from "../../../interfaces/SkillItem";
import SkillCard from "../SkillCard";
import "./Skills.css";

const skillsItems: SkillItem[] = SkillsData;
let minSkills = Infinity;
skillsItems.forEach((skill) => {
  minSkills = Math.min(minSkills, skill.skills.length);
});
minSkills += 2;
const Skills = () => {
  return (
    <div className='adaptive-grid anchor' id='skills'>
      {skillsItems.map((skill) => (
        <div
          style={{
            gridRow: "span ".concat(
              String(Math.floor(skill.skills.length / minSkills))
            ),
          }}
          key={skill.index}
        >
          <SkillCard skill={skill} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
