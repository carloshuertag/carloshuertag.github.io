import { useState } from "react";
import EducationItem from "../../interfaces/EducationItem";

const EducationCard = ({ education }: { education: EducationItem }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className='s12 m6'>
      <article className='round fill'>
        <details onToggle={toggleCard}>
          <summary className='none'>
            <div className='row'>
              <img
                className='circle large'
                src={education.imageSource}
                alt={education.school.concat(" logo")}
              ></img>
              <div className='max'>
                <h5>{education.fieldOfStudy}</h5>
                <nav className='no-margin'>
                  <span className='large-text max'>{education.degree}</span>
                  <a className='button circle transparent'>
                    <i id={"expandIcon".concat(education.index.toString())}>
                      {isExpanded ? "expand_less" : "expand_more"}
                    </i>
                  </a>
                </nav>
              </div>
            </div>
          </summary>
          <div>
            <div className='small-divider secondary'></div>
            <p className='large-text'>{education.school}</p>
            <p className='bold'>GPA: {education.gpa}/10</p>
            <p>
              {education.startYear}-{education.endYear}
            </p>
            <p>{education.city}</p>
            {education.extra.map(({ name, href }) => (
              <a
                key={name}
                className='row no-padding transparent wave round'
                href={href}
                target='_blank'
                rel='noreferrer'
              >
                <div className='max'>
                  <h6 className='small'>{name}</h6>
                </div>
                <button className='circle transparent'>
                  <i>open_in_new</i>
                </button>
              </a>
            ))}
          </div>
        </details>
      </article>
    </div>
  );
};

export default EducationCard;
