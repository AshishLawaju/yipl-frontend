import { FaAngleDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
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
              <li>
                Resources <FaAngleDown />{" "}
              </li>
            </ul>
          </div>
        </div>
        <CiSearch className="glass" style={{ fontSize: "20px" }} />
      </div>
    </nav>
  );
};

export default Navbar;
