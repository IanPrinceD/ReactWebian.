const Navbar = () => {
  const spanOne = { '--i': '1' }
  const spanTwo = { '--i': '2' };

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Web<span>ian</span>.
          <span className="animate animated" style={spanOne}></span>
        </a>

        <i className="fa-solid fa-bars" id="menu-icon">
          <span className="animate animated" style={spanTwo}></span>
        </i>

        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#skill">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <span className="active-nav"></span>
          <span className="animate animated" style={spanTwo}></span>
        </nav>
      </header>
    </>
  );
}
export default Navbar;