const Skills = () => {
  const spanTwo = { '--i': '2' };
  const spanThree = { '--i': '3' };
  const spanFour = { '--i': '4' };

  return (
    <>
      <section className="skill show-animate" id="skill">
        <h2>
          My <span>Skills</span>
          <span className="animate" style={spanTwo}></span>
        </h2>

        <div className="skills-row">
          <div className="skills-column">
            <h3>
              Technical Skills<span className="animate" style={spanFour}></span>
            </h3>
            <div className="skill-container">
              <div className="skill-content">
                <div className="skills">
                  <div className="skills-bullet">
                    <p>HTML</p>
                  </div>
                  <div className="skills-bullet">
                    <p>CSS</p>
                  </div>
                  <div className="skills-bullet">
                    <p>Javascript</p>
                  </div>
                  <div className="skills-bullet">
                    <p>PHP</p>
                  </div>
                </div>
              </div>
              <span className="animate" style={spanThree}></span>
            </div>
          </div>

          <div className="skills-column">
            <h3>
              Professional Skills
              <span className="animate" style={spanFour}></span>
            </h3>
            <div className="skill-container">
              <div className="skill-content">
                <div className="skills">
                  <div className="skills-bullet">
                    <p>Communication Skills</p>
                  </div>
                  <div className="skills-bullet">
                    <p>Leadership</p>
                  </div>
                  <div className="skills-bullet">
                    <p>Teamwork</p>
                  </div>
                  <div className="skills-bullet">
                    <p>Time Management</p>
                  </div>
                </div>
              </div>
              <span className="animate" style={spanThree}></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
