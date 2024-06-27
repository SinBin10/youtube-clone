import menu from "../Images/Menu.png";
import logo from "../Images/Youtube.png";
import mic from "../Images/Mic.png";
import search from "../Images/search.png";
import cross from "../Images/Cross.png";

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
        <div className="search-area">
          <div className="search-box">
            <div className="search">
              <img
                className="textarea-search-button"
                src={search}
                alt="search-button"
              />
              <input type="text" className="textbox" />
              <img src={cross} alt="delete-search" />
            </div>
            <img className="search-button" src={search} alt="search-button" />
          </div>
          <img src={mic} alt="" />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
