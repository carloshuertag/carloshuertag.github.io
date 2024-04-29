const EducationCards = () => {
  return (
    <div className='grid' id='education'>
      <div className='s12'>
        <h4>Education</h4>
      </div>
      <div className='s12 m6 l4 educationCard'>
        <article className='round fill'>
          <div className='row'>
            <img
              className='circle large'
              src='/escom.png'
              alt='ESCOM logo'
            ></img>
            <div className='max'>
              <h5>Computer Systems Engineering</h5>
              <p>2019-2024</p>
            </div>
          </div>
        </article>
      </div>
      <div className='s12 m6 l4 educationCard'>
        <article className='round fill'>
          <div className='row'>
            <img
              className='circle large'
              src='/etsisi.jpg'
              alt='ETSISI logo'
            ></img>
            <div className='max'>
              <h5>Software, Data Science and Artifical Intelligence</h5>
              <p>2023</p>
            </div>
          </div>
        </article>
      </div>
      <div className='s12 m6 l4 educationCard'>
        <article className='round fill'>
          <div className='row'>
            <img
              className='circle large'
              src='/cecyt9.png'
              alt='CEECyT 9 logo'
            ></img>
            <div className='max'>
              <h5>Programming Technician</h5>
              <p>2016-2019</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default EducationCards;
