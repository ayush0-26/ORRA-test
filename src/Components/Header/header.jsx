import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

import logo from "../../assets/logo.png";
import yellow from "../../assets/yellowgold.png";
import rose from "../../assets/rosegold.png";
import white from "../../assets/whitegold.png";
import diamond from "../../assets/diamond.png";

import { Navbar, Nav, Container, Row, Col, NavDropdown, Dropdown } from "react-bootstrap";
import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaStore } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="top-header">
        <Navbar.Brand>
          <img src={logo} alt="ORRA Logo" className="logo img-fluid" />
        </Navbar.Brand>

        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search for Diamond rings ..." />
        </div>

        <div className="icons">
          <div>
            <FaStore />
            <span>Find a Store</span>
          </div>
          <div><FaUser /><span>Login</span></div>
          <div><FaHeart /><span>Wishlist</span></div>
          <div><FaShoppingBag /><span>Cart</span></div>
        </div>
      </div>

      {/* ── NAV MENU ── */}
      <Navbar expand="lg" className="menu">
        <Container>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto">

              {/* DIAMOND */}
              <NavDropdown title="Diamond" className="mega-dropdown" autoClose="outside">
                <div className="mega-menu">
                  <Row>
                    <Col md={3}>
                      <h6>CATEGORY</h6>
                      <hr />
                      <Dropdown.Item href="#">All Jewellery</Dropdown.Item>
                      <Dropdown.Item href="#">Necklaces</Dropdown.Item>
                      <Dropdown.Item href="#">Earrings</Dropdown.Item>
                      <Dropdown.Item href="#">Pendants</Dropdown.Item>
                      <Dropdown.Item href="#">Necklace Sets</Dropdown.Item>
                      <Dropdown.Item href="#">Nosewear</Dropdown.Item>
                    </Col>
                    <Col md={3} className="mt-md-4">
                      <Dropdown.Item href="#">Bangles</Dropdown.Item>
                      <Dropdown.Item href="#">Rings</Dropdown.Item>
                      <Dropdown.Item href="#">Bracelets</Dropdown.Item>
                      <Dropdown.Item href="#">Pendant Sets</Dropdown.Item>
                      <Dropdown.Item href="#">Mangalsutra</Dropdown.Item>
                      <Dropdown.Item href="#">Chains</Dropdown.Item>
                      <Dropdown.Item href="#">For Men</Dropdown.Item>
                    </Col>
                    <Col md={3}>
                      <h6>SHOP BY METAL COLOUR</h6>
                      <hr />
                      <Dropdown.Item href="#"><img src={yellow} alt="Yellow Gold" />YELLOW GOLD</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={rose} alt="Rose Gold" />ROSE GOLD</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={white} alt="White Gold" />WHITE GOLD</Dropdown.Item>
                      <h6 className="mt-3">SHOP BY STONE</h6>
                      <hr />
                      <Dropdown.Item href="#"><img src={diamond} alt="Diamond" />DIAMOND</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={diamond} alt="Solitaire" />SOLITAIRE</Dropdown.Item>
                    </Col>
                    <Col md={3}>
                      <h6>SHOP BY GENDER</h6>
                      <hr />
                      <Dropdown.Item href="#">WOMEN</Dropdown.Item>
                      <Dropdown.Item href="#">MEN</Dropdown.Item>
                      <h6 className="mt-3">SHOP BY PRICE RANGE</h6>
                      <hr />
                      <Dropdown.Item href="#">10K - 20K</Dropdown.Item>
                      <Dropdown.Item href="#">20K - 50K</Dropdown.Item>
                      <Dropdown.Item href="#">ABOVE 50K</Dropdown.Item>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              {/* PLATINUM */}
              <NavDropdown title="Platinum" className="mega-dropdown" autoClose="outside">
                <div className="mega-menu">
                  <Row>
                    <Col md={3}>
                      <h6>CATEGORY</h6>
                      <hr />
                      <Dropdown.Item href="#">Bracelets</Dropdown.Item>
                      <Dropdown.Item href="#">Bangles</Dropdown.Item>
                      <Dropdown.Item href="#">Pendant Set</Dropdown.Item>
                      <Dropdown.Item href="#">Earrings</Dropdown.Item>
                      <Dropdown.Item href="#">Necklaces</Dropdown.Item>
                    </Col>
                    <Col md={3} className="mt-md-4">
                      <Dropdown.Item href="#">Chains</Dropdown.Item>
                      <Dropdown.Item href="#">Rings</Dropdown.Item>
                      <Dropdown.Item href="#">Nosewear</Dropdown.Item>
                      <Dropdown.Item href="#">Pendants</Dropdown.Item>
                    </Col>
                    <Col md={3}>
                      <h6>SHOP BY METAL COLOUR</h6>
                      <hr />
                      <Dropdown.Item href="#"><img src={yellow} alt="Yellow Gold" />YELLOW GOLD</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={rose} alt="Rose Gold" />ROSE GOLD</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={white} alt="White Gold" />WHITE GOLD</Dropdown.Item>
                      <h6 className="mt-3">SHOP BY STONE</h6>
                      <hr />
                      <Dropdown.Item href="#"><img src={diamond} alt="Diamond" />DIAMOND</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={diamond} alt="Solitaire" />SOLITAIRE</Dropdown.Item>
                    </Col>
                    <Col md={3}>
                      <h6>SHOP BY GENDER</h6>
                      <hr />
                      <Dropdown.Item href="#">WOMEN</Dropdown.Item>
                      <Dropdown.Item href="#">MEN</Dropdown.Item>
                      <h6 className="mt-3">SHOP BY PRICE RANGE</h6>
                      <hr />
                      <Dropdown.Item href="#">10K - 20K</Dropdown.Item>
                      <Dropdown.Item href="#">20K - 50K</Dropdown.Item>
                      <Dropdown.Item href="#">ABOVE 50K</Dropdown.Item>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              {/* RINGS */}
              <NavDropdown title="Rings" className="mega-dropdown" autoClose="outside">
                <div className="mega-menu">
                  <Row>
                    <Col md={3}>
                      <h6>CATEGORY</h6>
                      <hr />
                      <Dropdown.Item href="#">All Rings</Dropdown.Item>
                      <Dropdown.Item href="#">Engagement Rings</Dropdown.Item>
                      <Dropdown.Item href="#">Wedding Bands</Dropdown.Item>
                      <Dropdown.Item href="#">Solitaire Rings</Dropdown.Item>
                      <Dropdown.Item href="#">Cocktail Rings</Dropdown.Item>
                      <Dropdown.Item href="#">Eternity Rings</Dropdown.Item>
                    </Col>
                    <Col md={3} className="mt-md-4">
                      <Dropdown.Item href="#">Statement Rings</Dropdown.Item>
                      <Dropdown.Item href="#">Couple Rings</Dropdown.Item>
                      <Dropdown.Item href="#">Stackable Rings</Dropdown.Item>
                      <Dropdown.Item href="#">Men's Rings</Dropdown.Item>
                      <Dropdown.Item href="#">Noserings</Dropdown.Item>
                    </Col>
                    <Col md={3}>
                      <h6>SHOP BY METAL COLOUR</h6>
                      <hr />
                      <Dropdown.Item href="#"><img src={yellow} alt="Yellow Gold" />YELLOW GOLD</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={rose} alt="Rose Gold" />ROSE GOLD</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={white} alt="White Gold" />WHITE GOLD</Dropdown.Item>
                      <h6 className="mt-3">SHOP BY STONE</h6>
                      <hr />
                      <Dropdown.Item href="#"><img src={diamond} alt="Diamond" />DIAMOND</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={diamond} alt="Solitaire" />SOLITAIRE</Dropdown.Item>
                    </Col>
                    <Col md={3}>
                      <h6>SHOP BY GENDER</h6>
                      <hr />
                      <Dropdown.Item href="#">WOMEN</Dropdown.Item>
                      <Dropdown.Item href="#">MEN</Dropdown.Item>
                      <h6 className="mt-3">SHOP BY PRICE RANGE</h6>
                      <hr />
                      <Dropdown.Item href="#">10K - 20K</Dropdown.Item>
                      <Dropdown.Item href="#">20K - 50K</Dropdown.Item>
                      <Dropdown.Item href="#">ABOVE 50K</Dropdown.Item>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              {/* EARRINGS */}
              <NavDropdown title="Earrings" className="mega-dropdown" autoClose="outside">
                <div className="mega-menu">
                  <Row>
                    <Col md={3}>
                      <h6>CATEGORY</h6>
                      <hr />
                      <Dropdown.Item href="#">Studs</Dropdown.Item>
                      <Dropdown.Item href="#">Danglers</Dropdown.Item>
                      <Dropdown.Item href="#">Hoops</Dropdown.Item>
                      <Dropdown.Item href="#">Drop Earrings</Dropdown.Item>
                      <Dropdown.Item href="#">Chandbalis</Dropdown.Item>
                      <Dropdown.Item href="#">Ear Cuffs</Dropdown.Item>
                    </Col>
                    <Col md={3} className="mt-md-4">
                      <Dropdown.Item href="#">Jhumkas</Dropdown.Item>
                      <Dropdown.Item href="#">Solitaire Studs</Dropdown.Item>
                      <Dropdown.Item href="#">Cluster Earrings</Dropdown.Item>
                      <Dropdown.Item href="#">For Men</Dropdown.Item>
                    </Col>
                    <Col md={3}>
                      <h6>SHOP BY METAL COLOUR</h6>
                      <hr />
                      <Dropdown.Item href="#"><img src={yellow} alt="Yellow Gold" />YELLOW GOLD</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={rose} alt="Rose Gold" />ROSE GOLD</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={white} alt="White Gold" />WHITE GOLD</Dropdown.Item>
                      <h6 className="mt-3">SHOP BY STONE</h6>
                      <hr />
                      <Dropdown.Item href="#"><img src={diamond} alt="Diamond" />DIAMOND</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={diamond} alt="Solitaire" />SOLITAIRE</Dropdown.Item>
                    </Col>
                    <Col md={3}>
                      <h6>SHOP BY GENDER</h6>
                      <hr />
                      <Dropdown.Item href="#">WOMEN</Dropdown.Item>
                      <Dropdown.Item href="#">MEN</Dropdown.Item>
                      <h6 className="mt-3">SHOP BY PRICE RANGE</h6>
                      <hr />
                      <Dropdown.Item href="#">10K - 20K</Dropdown.Item>
                      <Dropdown.Item href="#">20K - 50K</Dropdown.Item>
                      <Dropdown.Item href="#">ABOVE 50K</Dropdown.Item>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              {/* NECKLACE SETS */}
              <NavDropdown title="Necklace Sets" className="mega-dropdown" autoClose="outside">
                <div className="mega-menu">
                  <Row>
                    <Col md={3}>
                      <h6>CATEGORY</h6>
                      <hr />
                      <Dropdown.Item href="#">All Necklace Sets</Dropdown.Item>
                      <Dropdown.Item href="#">Chokers</Dropdown.Item>
                      <Dropdown.Item href="#">Layered Sets</Dropdown.Item>
                      <Dropdown.Item href="#">Pendant Sets</Dropdown.Item>
                      <Dropdown.Item href="#">Tanmaniya Sets</Dropdown.Item>
                      <Dropdown.Item href="#">Bridal Sets</Dropdown.Item>
                    </Col>
                    <Col md={3} className="mt-md-4">
                      <Dropdown.Item href="#">Statement Sets</Dropdown.Item>
                      <Dropdown.Item href="#">Everyday Sets</Dropdown.Item>
                      <Dropdown.Item href="#">Mangalsutra Sets</Dropdown.Item>
                    </Col>
                    <Col md={3}>
                      <h6>SHOP BY METAL COLOUR</h6>
                      <hr />
                      <Dropdown.Item href="#"><img src={yellow} alt="Yellow Gold" />YELLOW GOLD</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={rose} alt="Rose Gold" />ROSE GOLD</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={white} alt="White Gold" />WHITE GOLD</Dropdown.Item>
                      <h6 className="mt-3">SHOP BY STONE</h6>
                      <hr />
                      <Dropdown.Item href="#"><img src={diamond} alt="Diamond" />DIAMOND</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={diamond} alt="Solitaire" />SOLITAIRE</Dropdown.Item>
                    </Col>
                    <Col md={3}>
                      <h6>SHOP BY GENDER</h6>
                      <hr />
                      <Dropdown.Item href="#">WOMEN</Dropdown.Item>
                      <Dropdown.Item href="#">MEN</Dropdown.Item>
                      <h6 className="mt-3">SHOP BY PRICE RANGE</h6>
                      <hr />
                      <Dropdown.Item href="#">10K - 20K</Dropdown.Item>
                      <Dropdown.Item href="#">20K - 50K</Dropdown.Item>
                      <Dropdown.Item href="#">ABOVE 50K</Dropdown.Item>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              {/* EVERYDAY ESSENTIALS */}
              <NavDropdown title="Everyday Essentials" className="mega-dropdown" autoClose="outside">
                <div className="mega-menu">
                  <Row>
                    <Col md={4}>
                      <h6>SHOP BY CATEGORY</h6>
                      <hr />
                      <Dropdown.Item href="#">Rings</Dropdown.Item>
                      <Dropdown.Item href="#">Earrings</Dropdown.Item>
                      <Dropdown.Item href="#">Pendants</Dropdown.Item>
                      <Dropdown.Item href="#">Necklaces</Dropdown.Item>
                      <Dropdown.Item href="#">Bracelets</Dropdown.Item>
                      <Dropdown.Item href="#">Bangles</Dropdown.Item>
                    </Col>
                    <Col md={4}>
                      <h6>SHOP BY METAL COLOUR</h6>
                      <hr />
                      <Dropdown.Item href="#"><img src={yellow} alt="Yellow Gold" />YELLOW GOLD</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={rose} alt="Rose Gold" />ROSE GOLD</Dropdown.Item>
                      <Dropdown.Item href="#"><img src={white} alt="White Gold" />WHITE GOLD</Dropdown.Item>
                    </Col>
                    <Col md={4}>
                      <h6>SHOP BY PRICE RANGE</h6>
                      <hr />
                      <Dropdown.Item href="#">10K - 20K</Dropdown.Item>
                      <Dropdown.Item href="#">20K - 50K</Dropdown.Item>
                      <Dropdown.Item href="#">ABOVE 50K</Dropdown.Item>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
