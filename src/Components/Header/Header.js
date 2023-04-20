import "./Header.css";
import Logo from "../../Images/Logo.png";
import arrow from "../../Images/arrow.png";
import phone from "../../Images/phone-call.svg";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { HeaderData } from "./HeaderData";
import NavMenu from "./NavMenu";
import Sliderbtn from "./Sliderbtn";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  

  return (
    <div className={`header ${isScrolled ? "stickynav" : ""}`} >
      <section class="troo-da-header-section" id="troo-da-header-section">
        <Navbar expand="lg" bg="light" >
          <Navbar.Brand>
            <Link to="/Home">
              <img src={Logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ">
              {HeaderData.slice(0, 7).map((item, i) => {
                return <NavMenu key={i} item={item} />;
              })}
            </ul>
            <div class="get-col">
              {HeaderData.slice(-1).map((e, i) => {
                return (
                  <Link className="btnn btn-lg" key={i} to={e.path}>
                    <span>{e.title}</span>
                    <img src={arrow} alt="arrow" />
                  </Link>
                );
              })}
            </div>
            <div class="call-us">
              <div class="cll-img">
                <img src={phone} alt="phone" />
              </div>
              <div class="call-text">
                <strong>Call Us on</strong>
                <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <Sliderbtn />
      </section>
    </div>
  );
};

export default Header;
