import { Title, skillLinks } from '../../Links';

const Skills = () => {
  const spanTwo = { '--i': '2' };
  const spanThree = { '--i': '3' };
  const spanFour = { '--i': '4' };

  return (
    <>
      <section className="skill show-animate" id="skill">
        <h2>
          <Title firstWord='My' secondWord='Skills' />
          <span className="animate" style={spanTwo}></span>
        </h2>

        <div className="skills-row">
          {skillLinks.map((link) => {
            return (
              <div className="skills-column" key={link.id}>
                <h3>
                  {link.category}
                  <span className="animate" style={spanFour}></span>
                </h3>
                <div className="skill-container">
                  <div className="skill-content">
                    <div className="skills">
                      {link.skills.map((skills, index) => {
                        return (
                          <div key={index} className="skills-bullet">
                            <p>{skills}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <span className="animate" style={spanThree}></span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Skills;
