import ExperienceItem from "../../../interfaces/ExperienceItem";
import "./CarouselItem.css";

const CarouselItem = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <>
      <article className='no-padding round primary-container'>
        <img
          className='carousel-item responsive'
          src={experience.coverSource}
          loading='lazy'
          alt={experience.title.concat(" cover")}
        />
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
            <button
              className='circle transparent'
              data-ui={"#xp".concat(String(experience.index))}
            >
              <i>expand_content</i>
            </button>
          </nav>
        </div>
      </article>
      <dialog className='max fill' id={"xp".concat(String(experience.index))}>
        <nav>
          <div className='max'>
            <h5 className='wrap'>{experience.title}</h5>
            <h6>
              {experience.startYear}
              {experience.startYear != experience.endYear && (
                <span> - {experience.endYear}</span>
              )}
            </h6>
          </div>
          <button
            className='circle transparent'
            data-ui={"#xp".concat(String(experience.index))}
          >
            <i>collapse_content</i>
          </button>
        </nav>
        {experience.media ? (
          <iframe
            loading='lazy'
            style={{ height: "50vh" }}
            className='responsive no-border top-margin round'
            src={experience.media}
            title={experience.title}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        ) : (
          <img
            className='responsive top-margin round'
            style={{ height: "50vh" }}
            src={experience.coverSource}
            loading='lazy'
            alt={experience.title.concat(" cover")}
          />
        )}
        <p className='bottom-padding large-text'>{experience.description}</p>
        <nav className='right-align'>
          <button
            className='border'
            data-ui={"#xp".concat(String(experience.index))}
          >
            Close
          </button>
          <a
            className='button'
            href={experience.href}
            target='_blank'
            rel='noreferrer'
          >
            Visit
          </a>
        </nav>
      </dialog>
    </>
  );
};

export default CarouselItem;
