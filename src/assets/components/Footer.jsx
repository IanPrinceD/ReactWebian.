const Footer = () => {
const spanTwo = { '--i': '2' };

  return (
    <>
      <footer className="footer show-animate">
        <p className="copyright">
          &copy; 2023. All Rights Reserved.
          <span className="animate animated" style={spanTwo}></span>
        </p>
      </footer>
    </>
  );
}
export default Footer;