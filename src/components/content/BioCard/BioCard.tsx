import "./BioCard.css";

const BioCard = () => {
  return (
    <article className='no-padding round blur' id='me'>
      <img
        className='responsive landscape'
        src='/landscape.jpg'
        alt='Landscape picture of Carlos Huerta García'
      />
      <div className='padding'>
        <h3>Carlos Huerta García</h3>
        <h6>Software Developer</h6>
        <p>
          I am a software engineer who has been participating in each and every
          phase of the application life managment cycle within multiple areas. I
          look forward to lead software projects focusing on improving the life
          condition of the people
        </p>
      </div>
    </article>
  );
};

export default BioCard;
