import ExperienceItem from "../../../interfaces/ExperienceItem";
import "./CarouselItem.css";

const CarouselItem = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <>
      <article className='no-padding round tertiary-container'>
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
            className='responsive large-height top-margin round'
            src={experience.coverSource}
            loading='lazy'
            alt={experience.title.concat(" cover")}
          />
        )}
        <p className='bottom-padding'>{experience.description}</p>
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
