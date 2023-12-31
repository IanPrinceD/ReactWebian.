import profileTwo from '../images/profile_pic.jpg';
import { Button, Title } from '../../Links';

const About = () => {
  const spanTwo = { '--i': '2' };
  const spanThree = { '--i': '3' };
  const spanFour = { '--i': '4' };
  const spanFive = { '--i': '5' };

  return (
    <>
      <section className="about show-animate" id="about">
        <h2>
          <Title firstWord="About" secondWord="Me" />
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
            A highly skilled and creative Web Developer, I bring a wealth of
            experience in working with advanced web technologies, including
            HTML, CSS, Javascript, PHP, and MySQL. My expertise extends to both
            independent projects, where I have demonstrated a proven ability to
            self-manage, as well as collaborative team settings, where I excel
            in effective cooperation and contribution. My multifaceted skill set
            allows me to navigate seamlessly through the intricacies of web
            development, ensuring the successful implementation of innovative
            and efficient solutions.
            <span className="animate" style={spanThree}></span>
          </p>
          <div className="btn-box btns">
            <a
              href="/assests/images/Ian Dumanhug.pdf"
              download="Ian_Dumanhug_CV.pdf"
            >
              <Button word="Download CV" />
            </a>
            <span className="animate" style={spanThree}></span>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
