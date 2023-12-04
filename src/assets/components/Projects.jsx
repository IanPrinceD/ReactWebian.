import { projectLinks } from "../../Links";

const Projects = () => {
  const spanTwo = { '--i': '2' };
  const spanThree = { '--i': '3' };

  return (
    <>
      <section className="projects show-animate" id="projects">
        <h2>
          Recent <span>Projects</span>
          <span className="animate" style={spanTwo}></span>
        </h2>

        <div className="project-container">
          {projectLinks.map((link) => {
            return (
              <div className="project-box" key={link.id}>
                <img
                  src={link.img}
                  alt={link.title}
                />
                <div className="project-layer">
                  <h4>{link.title}</h4>
                  <p>
                    {link.description}
                  </p>
                  <a href={link.link}>
                    <i className={link.icon}></i>
                  </a>
                </div>
                <span className="animate" style={spanThree}></span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Projects;
