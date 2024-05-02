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
            I am a software engineer who has been participating in each and
            every phase of the application life managment cycle within multiple
            areas. I look forward to lead software projects focusing on
            improving the life condition of the people
          </p>
        </div>
      </article>
    </div>
  );
};

export default BioCard;
