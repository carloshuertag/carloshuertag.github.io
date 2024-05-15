import EducationItem from "../../interfaces/EducationItem";
import EducationCard from "./EducationCard";
import EducationData from "../../data/education.json";

const educationItems: EducationItem[] = EducationData;

const Education = () => {
  return (
    <div className='grid page left active anchor' id='education'>
      {educationItems.map((item) => (
        <EducationCard education={item} key={item.index} />
      ))}
    </div>
  );
};

export default Education;
