import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

import logo from "../../assets/logo.png";
import yellow from "../../assets/yellowgold.png";
import rose from "../../assets/rosegold.png";
import white from "../../assets/whitegold.png";
import diamond from "../../assets/diamond.png";

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";

import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaStore,
} from "react-icons/fa";

const Header = () => {
  return (
    <>

      <div className="top-header">
        <Navbar.Brand>
          <img src={logo} alt="Logo" className="logo img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search for Diamond rings ..."
          />
        </div>

        <div className="icons">
          <div>
            <FaStore />
            <span>Find a Store</span>
          </div>

          <FaUser />
          <FaHeart />
          <FaShoppingBag />
        </div>
      </div>


      <Navbar expand="lg" className="menu">
        <Container>




          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">


              <NavDropdown
                title="Diamond"
                className="mega-dropdown"
                autoClose="outside"
              >
                <div className="mega-menu">
                  <Row>
                    <Col md={3}>
                      <h6>CATEGORY</h6>
                      <hr />

                      <Dropdown.Item>All Jewellery</Dropdown.Item>
                      <Dropdown.Item>Necklaces</Dropdown.Item>
                      <Dropdown.Item>Earrings</Dropdown.Item>
                      <Dropdown.Item>Pendants</Dropdown.Item>
                      <Dropdown.Item>Necklace Sets</Dropdown.Item>
                      <Dropdown.Item>Nosewear</Dropdown.Item>
                    </Col>

                    <Col md={3} className="mt-md-4">
                      <Dropdown.Item>Bangles</Dropdown.Item>
                      <Dropdown.Item>Rings</Dropdown.Item>
                      <Dropdown.Item>Bracelets</Dropdown.Item>
                      <Dropdown.Item>Pendant Sets</Dropdown.Item>
                      <Dropdown.Item>Mangalsutra</Dropdown.Item>
                    </Col>

                    <Col md={3}>
                      <h6>SHOP BY METAL COLOUR</h6>
                      <hr />

                      <Dropdown.Item>
                        <img src={yellow} alt="Yellow Gold" />
                        YELLOW GOLD
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <img src={rose} alt="Rose Gold" />
                        ROSE GOLD
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <img src={white} alt="White Gold" />
                        WHITE GOLD
                      </Dropdown.Item>

                      <h6 className="mt-3">SHOP BY STONE</h6>
                      <hr />

                      <Dropdown.Item>
                        <img src={diamond} alt="Diamond" />
                        DIAMOND
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <img src={diamond} alt="Solitaire" />
                        SOLITAIRE
                      </Dropdown.Item>
                    </Col>

                    <Col md={3}>
                      <h6>SHOP BY GENDER</h6>
                      <hr />

                      <Dropdown.Item>WOMEN</Dropdown.Item>
                      <Dropdown.Item>MEN</Dropdown.Item>

                      <h6 className="mt-3">SHOP BY PRICE RANGE</h6>
                      <hr />

                      <Dropdown.Item>10K-20K</Dropdown.Item>
                      <Dropdown.Item>20K-50K</Dropdown.Item>
                      <Dropdown.Item>ABOVE 50K</Dropdown.Item>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>


              <NavDropdown
                title="Platinum"
                className="mega-dropdown"
                autoClose="outside"
              >
                <div className="mega-menu">
                  <Row>
                    <Col md={4}>
                      <h6>CATEGORY</h6>
                      <hr />

                      <Dropdown.Item>Bangles</Dropdown.Item>
                      <Dropdown.Item>Rings</Dropdown.Item>
                      <Dropdown.Item>Bracelets</Dropdown.Item>
                      <Dropdown.Item>Pendant Sets</Dropdown.Item>
                      <Dropdown.Item>Mangalsutra</Dropdown.Item>
                    </Col>

                    <Col md={4}>
                      <h6>MORE</h6>
                      <hr />

                      <Dropdown.Item>Chains</Dropdown.Item>
                      <Dropdown.Item>Pendants</Dropdown.Item>
                      <Dropdown.Item>Earrings</Dropdown.Item>
                    </Col>

                    <Col md={4}>
                      <h6>SHOP BY GENDER</h6>
                      <hr />

                      <Dropdown.Item>WOMEN</Dropdown.Item>
                      <Dropdown.Item>MEN</Dropdown.Item>

                      <h6 className="mt-3">SHOP BY PRICE RANGE</h6>
                      <hr />

                      <Dropdown.Item>10K-20K</Dropdown.Item>
                      <Dropdown.Item>20K-50K</Dropdown.Item>
                      <Dropdown.Item>ABOVE 50K</Dropdown.Item>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              {/* Rings */}
              <NavDropdown
                title="Rings"
                className="mega-dropdown"
                autoClose="outside"
              >
                <div className="two-col-dropdown">
                  <Row>

                    <Col md={4}>
                      <h6>SHOP BY METAL COLOUR</h6>
                      <hr />

                      <Dropdown.Item>
                        <img src={yellow} />
                        YELLOW GOLD
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <img src={rose} />
                        ROSE GOLD
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <img src={white} />
                        WHITE GOLD
                      </Dropdown.Item>
                      <h6>SHOP BY STONE</h6>
                      <hr />

                      <Dropdown.Item>
                        <img src={diamond} />
                        DIAMOND
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <img src={diamond} />
                        SOLITAIRE
                      </Dropdown.Item>
                    </Col>





                    <Col md={4}>
                      <h6>SHOP BY PRICE RANGE</h6>
                      <hr />

                      <Dropdown.Item>10K-20K</Dropdown.Item>
                      <Dropdown.Item>20K-50K</Dropdown.Item>
                      <Dropdown.Item>ABOVE 50K</Dropdown.Item>
                    </Col>

                  </Row>
                </div>
              </NavDropdown>

              {/* Earrings */}
              <NavDropdown
                title="Earrings"
                className="mega-dropdown"
                autoClose="outside"
              >
                <div className="two-col-dropdown">
                  <Row>
                    <Col md={6}>
                      <h6>SHOP BY METAL COLOUR</h6>
                      <hr />

                      <Dropdown.Item>
                        <img src={yellow} alt="Yellow Gold" />
                        YELLOW GOLD
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <img src={rose} alt="Rose Gold" />
                        ROSE GOLD
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <img src={white} alt="White Gold" />
                        WHITE GOLD
                      </Dropdown.Item>
                    </Col>

                    <Col md={6}>
                      <h6>SHOP BY STONE</h6>
                      <hr />

                      <Dropdown.Item>
                        <img src={diamond} alt="Diamond" />
                        DIAMOND
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <img src={diamond} alt="Solitaire" />
                        SOLITAIRE
                      </Dropdown.Item>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              {/* Necklace Sets */}
              <NavDropdown
                title="Necklace Sets"
                className="mega-dropdown"
                autoClose="outside"
              >
                <div className="two-col-dropdown">
                  <Row>
                    <Col md={6}>
                      <h6>SHOP BY METAL COLOUR</h6>
                      <hr />

                      <Dropdown.Item>
                        <img src={yellow} alt="Yellow Gold" />
                        YELLOW GOLD
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <img src={rose} alt="Rose Gold" />
                        ROSE GOLD
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <img src={white} alt="White Gold" />
                        WHITE GOLD
                      </Dropdown.Item>
                    </Col>

                    <Col md={6}>
                      <h6>SHOP BY PRICE RANGE</h6>
                      <hr />

                      <Dropdown.Item>10K-20K</Dropdown.Item>
                      <Dropdown.Item>20K-50K</Dropdown.Item>
                      <Dropdown.Item>ABOVE 50K</Dropdown.Item>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              {/* Everyday Essentials */}
              <NavDropdown title="Everyday Essentials"
               autoClose="outside">
                <div className="everyday-menu d-flex justify-content-between">
                  <Dropdown.Item>Rings</Dropdown.Item>
                  <Dropdown.Item>Necklaces</Dropdown.Item>
                  <Dropdown.Item>Earrings</Dropdown.Item>
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