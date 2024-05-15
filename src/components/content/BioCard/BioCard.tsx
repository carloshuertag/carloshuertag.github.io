import "./BioCard.css";

const BioCard = () => {
  return (
    <div className='page top active'>
      <article className='no-padding round small-blur anchor' id='me'>
        <img
          className='responsive landscape'
          src='/landscape.jpg'
          alt='Landscape picture of Carlos Huerta García'
        />
        <div className='padding'>
          <h3>Carlos Huerta García</h3>
          <h6>Software Developer</h6>
          <p className='large-text'>
            I am a software engineer with 5 years of experience participating in
            each stage of application lifecycle management within multiple
            areas. I am looking forward to participate in software projects
            focusing on improving people&apos;s life conditions.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BioCard;
