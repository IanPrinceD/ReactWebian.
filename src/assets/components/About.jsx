import profileTwo from '../images/profile 2.jpg';

const About = () => {
  const spanTwo = { '--i': '2' };
  const spanThree = { '--i': '3' };
  const spanFour = { '--i': '4' };
  const spanFive = { '--i': '5' };

  return (
    <>
      <section className="about show-animate" id="about">
        <h2>
          About <span>Me</span>
          <span className="animate" style={spanTwo}></span>
        </h2>

        <div className="about-img">
          <img src={profileTwo} alt="Profile" />
          <span className="circle-spin"></span>
          <span className="animate" style={spanFive}></span>
        </div>

        <div className="about-content">
          <h3>
            Web Developer!<span className="animate" style={spanFour}></span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            dolorum eligendi perspiciatis voluptatem enim inventore soluta
            exercitationem veritatis quisquam, repellat nemo eius distinctio.
            Obcaecati rem placeat, excepturi quidem, omnis nostrum ut
            perferendis saepe fugiat minus vero sequi! Non corporis voluptatum
            maiores magni quisquam repudiandae! Temporibus aliquam error eius id
            molestias?
            <span className="animate" style={spanThree}></span>
          </p>
          <div className="btn-box btns">
            <a href="/assests/Ian Dumanhug.pdf" download="Ian_Dumanhug_CV.pdf">
              <button>Download CV</button>
            </a>
            <span className="animate" style={spanThree}></span>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
