import profile from '../images/profile.png';

const Home = () => {
  const spanTwo = { '--i': '2' };
  const spanThree = { '--i': '3' };
  const spanFour = { '--i': '4' };
  const spanFive = { '--i': '5' };
  const spanSix = { '--i': '6' };

  return (
    <>
      <section className="home show-animate" id="home">
        <div className="home-content">
          <h2>
            Hello, It's Me<span className="animate" style={spanTwo}></span>
          </h2>
          <h1>
            Ian Prince<span className="animate" style={spanThree}></span>
          </h1>
          <h2>
            And I'm a <span className="text-animate">Web Developer</span>
            <span className="animate" style={spanTwo}></span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            enim esse velit corporis quo iste nisi ex? Officia, nihil voluptate!
            <span className="animate" style={spanFour}></span>
          </p>
          <div className="btn-box">
            <button>Hire Me</button>
            <button>Let's Talk</button>
            <span className="animate" style={spanFive}></span>
          </div>
          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-github-alt"></i>
              </a>
            </li>
            <span className="animate" style={spanSix}></span>
          </ul>
        </div>
        <div className="home-img">
          <img src={profile} alt="Profile" />
          <span className="animate" style={spanSix}></span>
        </div>
      </section>
    </>
  );
};
export default Home;
