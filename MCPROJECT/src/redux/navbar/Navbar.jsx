import React, { useState } from "react";
import Cristmas from "../../image/cristmas.png";
import FooterLogo from "../../image/FooterLogo.jpg";

function Navbar() {
  // State to track the dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container">
      <header className="header-mc">
        <nav className="nav-mc">
          <div className="global-div-mc">
            <div className="top-headers">
              <img className="image-mc" src={FooterLogo} alt="" />
              <div className="language">
                <h4>Dil</h4>
                <div className="end-header">
                  {/* <button className="header-btn">Indi sifariş edin</button> */}
                  <div className="dropdown">
                    <div className="meynu-mc">
                      <h4
                        onClick={toggleDropdown}
                        style={{ cursor: "pointer" }}
                      >
                        Menyu
                      </h4>

                      {/* Display the dropdown content based on state */}
                      {isDropdownOpen && (
                        <div
                          style={{
                            width: "100%",
                            height: "200px",
                            margin: "0",
                            boxSizing: "border-box",
                            border: "1px solid black",
                          }}
                          className="dropdown-content"
                        >
                          <a href="#">Dropdown Item 1</a>
                          <a href="#">Dropdown Item 2</a>
                          <a href="#">Dropdown Item 3</a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="email-div">
                <h4>E-məktublara abunəlik </h4>
              </div>
              <div className="karier-div">
                <h4>Kariyera</h4>
              </div>
            </div>
          </div>

          <img className="img-cristmas" src={Cristmas} alt="" />
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
