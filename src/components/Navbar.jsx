import { FaAngleDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

import I1 from "../assets/I1.png";
import I2 from "../assets/I2.png";
import I3 from "../assets/I3.png";
import Search from "./Search";

const Navbar = () => {
  const [navSubMenu, setNavSubMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <nav className=" navbar">
      <div className="container nav1">
        <div className="nav2">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Case Studies</li>
              <li
                className="sub-navbar"
                onMouseEnter={() => setNavSubMenu(true)}
                onMouseLeave={() => setNavSubMenu(false)}
              >
                Resources <FaAngleDown />{" "}
                {navSubMenu && (
                  <div
                    className="sub-navbar-content"
                    onMouseEnter={() => setNavSubMenu(true)}
                    onMouseLeave={() => setNavSubMenu(false)}
                  >
                    <div className="sub-nav">
                      <div>
                        <img src={I1} alt="blog" style={{ width: "16px" }} />
                      </div>
                      <div className="sub-nav-content">
                        <h5 className="titles">Blog</h5>
                        <p className="subtitles">
                          The latest industry news, updates and info.
                        </p>
                      </div>
                    </div>
                    <div className="sub-nav">
                      <div>
                        <img src={I2} alt="blog" style={{ width: "16px" }} />
                      </div>
                      <div className="sub-nav-content">
                        <h5 className="titles">Customer stories</h5>
                        <p className="subtitles">
                          Learn how our customers are making big changes.
                        </p>
                      </div>
                    </div>
                    <div className="sub-nav">
                      <div>
                        <img src={I3} alt="blog" style={{ width: "16px" }} />
                      </div>
                      <div className="sub-nav-content">
                        <h5 className="titles">Video tutorials</h5>
                        <p className="subtitles">
                          Get up and running on new features and techniques.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        <CiSearch
          className="glass"
          style={{ fontSize: "20px" }}
          onClick={()=>setShowSearch(pre=>!pre)}
        />
      </div>

      {showSearch && <Search setShowSearch={setShowSearch}   />}
    </nav>
  );
};

export default Navbar;
