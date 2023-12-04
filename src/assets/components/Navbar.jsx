import { pageLinks } from "../../Links";

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
          {pageLinks.map((link) => {
            return(
              <a key={link.id} href={link.link} className={link.class}>
                {link.text}
              </a>
            )
          }
          )}
          <span className="active-nav"></span>
          <span className="animate animated" style={spanTwo}></span>
        </nav>
      </header>
    </>
  );
}
export default Navbar;