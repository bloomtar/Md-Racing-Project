
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../../styles/header.scss"
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { useLocation } from "react-use";


// TypeScript interface for props

interface HeaderProps {
  setMobileMenu: (e: boolean) => void
}


// Functional component

const Header: React.FC<HeaderProps> = ({ setMobileMenu }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  
  useEffect(() => {
    setMobileMenu(menuOpened);
  }, [menuOpened]);

  
  // const isMobile =useMediaQuery("(max-width: 991px)");

  return (
    <Navbar className="nav-wrapper" expand="lg">
      <div className="header-container d-flex align-items-center justify-content-between">
        <Link className="navbar-home" to="/">
          {!menuOpened && (
            <img className="logo-image" src="./src/assets/img/MDCCimg.png" alt="mdcc-logo" />
          )}
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          {/* {menuOpened ? (
            <AiOutlineClose size={36} color="#ffffff" />
          ) : (
            <AiOutlineMenu size={36} color="#ffffff" />
          )} */}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center justify-content-between flex-fill">
            {menuOpened && (
              <Link className="navbar-home" to="/">
                <img
                  className="logo-image me-0"
                  src="./src/assets/img/MDCCimg.png"
                  alt="mdcc-logo"
                />
              </Link>
            )}
            <NavDropdown
              title="MAD DOGS"
              id="navbarScrollingDropdown"
              className="font-nav font-bold">
              <NavDropdown.Item href="">ABOUT</NavDropdown.Item>
              <NavDropdown.Item href="">
                MAD DOGS RANKING
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                WHITEPAPER
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="MAD DOG CARS"
              id="navbarScrollingDropdown"
              className="font-nav font-bold"
            >
              <NavDropdown.Item href="">ABOUT</NavDropdown.Item>
              <NavDropdown.Item href="">
                WHITEPAPER
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="MD RACERS"
              id="navbarScrollingDropdown"
              className="font-nav font-bold"
            >
              <NavDropdown.Item href="">ABOUT</NavDropdown.Item>
              <NavDropdown.Item href="">
                MD RACERS RANKING
              </NavDropdown.Item>

              <NavDropdown.Item href="">
                LEADERBOARD
              </NavDropdown.Item>

              <NavDropdown.Item href="">
                WHITEPAPER
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="MD LICENSE"
              id="navbarScrollingDropdown"
              className="font-nav font-bold"
            >
              <NavDropdown.Item href="">ABOUT</NavDropdown.Item>
              <NavDropdown.Item href="">
                WHITEPAPER
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="MD RACING"
              id="navbarScrollingDropdown"
              className="font-nav font-bold"
            >
              <NavDropdown.Item href="">ABOUT</NavDropdown.Item>
              <NavDropdown.Item href="">
                WHITEPAPER
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                BUG REPORT
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                GAME UPDATES
              </NavDropdown.Item>
            </NavDropdown>

            <a href="" className="font-nav font-bold text-nowrap">
              MD TOKEN
            </a>

            <div className="social-panel d-flex align-items-center justify-content-center">
              <a
                href="https://twitter.com/MadDogCarClub?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./src/assets/img/Twitter_Logo1.png" alt="twitter-logo" />
              </a>
              <a
                href="https://www.instagram.com/maddogcarclub/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./src/assets/img/Instagram_Logo1.png" alt="instagram-logo" />
              </a>
              <a
                href="https://discord.com/invite/maddogcarclub"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./src/assets/img/Discord-Logo1.png" alt="discord-logo" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCKoR9s7EOUWLvLLx0SyxKaQ"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./src/assets/img/youtube_icon2.png" alt="youtube-logo" />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;