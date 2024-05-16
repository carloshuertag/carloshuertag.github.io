import ExperienceItem from "../../../interfaces/ExperienceItem";
import "./CarouselItem.css";

const CarouselItem = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <article className='no-padding round tertiary-container'>
      {experience.cover === "video" ? (
        <video className='carousel-item responsive' muted loop playsInline>
          <source src={experience.coverSource} type='video/mp4' />
        </video>
      ) : (
        <img
          className='carousel-item responsive'
          src={experience.coverSource}
          loading='lazy'
          alt={experience.title.concat(" cover")}
        />
      )}
      <div className='absolute bottom left right padding bottom-shadow bottom-round white-text'>
        <h5>{experience.title}</h5>
        <div className='max'></div>
        <nav>
          <span className='large-text max'>
            {experience.startYear}
            {experience.startYear != experience.endYear && (
              <span> - {experience.endYear}</span>
            )}
          </span>
          <button className='circle transparent'>
            <i>expand_content</i>
          </button>
        </nav>
      </div>
    </article>
  );
};

export default CarouselItem;
