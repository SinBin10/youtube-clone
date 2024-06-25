import menu from "../Images/Menu.png";
import logo from "../Images/Youtube.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-div">
          <img src={menu} className="menu" alt="menubar" />
          <div className="logo">
            <img src={logo} className="youtube-logo" alt="youtube logo" />
            <p className="youtube-logo-text">YouTube</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
