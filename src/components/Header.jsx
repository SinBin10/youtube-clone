import hamburger from "../assets/Menu.png";
import logo from "../assets/youtube-logo-png-46020.png";
import search from "../assets/search.png";
import mic from "../assets/Mic.png";
import setting from "../assets/image.png";
import user from "../assets/user.png";
import { useState } from "react";

const Header = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  console.log(searchFocus);
  return (
    <div className="flex items-center justify-between">
      <div className="flex h-14">
        <div className="h-full">
          <img
            className="h-full p-4 cursor-pointer"
            src={hamburger}
            alt="hamburger"
          />
        </div>
        <a className="ml-2" href="/">
          <img className="h-full" src={logo} alt="youtube logo" />
        </a>
      </div>
      <div className="h-10 flex items-center">
        <div
          className={`${
            searchFocus
              ? "w-[40rem] border-[1px] border-blue-500"
              : "w-[600px] ml-11"
          } border-[#ffffff26] border-2 h-full flex rounded-3xl items-center`}
        >
          {searchFocus && (
            <div className="w-12 px-3">
              <img src={search} alt="search" />
            </div>
          )}
          <input
            className="h-full w-full bg-inherit outline-none text-white pl-5 pr-5 text-base"
            type="text"
            placeholder="Search"
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
          <div className="h-full">
            <img
              className="px-5 h-full object-contain rounded-r-3xl bg-[#ffffff26]"
              src={search}
              alt="search"
            />
          </div>
        </div>
        <div className="ml-5 bg-[#ffffff26] p-2 rounded-full">
          <img src={mic} alt="mic" />
        </div>
      </div>
      <div className="flex items-center pr-4">
        <div className="h-7 mr-4 cursor-pointer">
          <img className="h-full w-full" src={setting} alt="settings icon" />
        </div>
        <div className="flex border-2 py-2 px-4 rounded-3xl border-[#ffffff26] cursor-pointer">
          <img src={user} alt="user-icon" />
          <p className="text-blue-400 ml-2">Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
