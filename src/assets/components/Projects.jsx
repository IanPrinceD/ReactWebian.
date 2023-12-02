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
          <div className="project-content">
            <div className="project-box">
              <img
                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8fHww"
                alt="Project 1"
              />
              <div className="project-layer">
                <h4>Neoeye Optical Clinic</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi, et veritatis ratione nihil aperiam atque!
                </p>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <span className="animate" style={spanThree}></span>
            </div>
          </div>

          <div className="project-box">
            <img
              src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8fHww"
              alt="Project 1"
            />
            <div className="project-layer">
              <h4>Byte Genius</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi, et veritatis ratione nihil aperiam atque!
              </p>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <span className="animate" style={spanThree}></span>
          </div>

          <div className="project-box">
            <img
              src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8fHww"
              alt="Project 1"
            />
            <div className="project-layer">
              <h4>The Red Jumpsuit Apparatus</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi, et veritatis ratione nihil aperiam atque!
              </p>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <span className="animate" style={spanThree}></span>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
