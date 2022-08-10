import "./header.scss";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Header = () => {
  const ulRef = useRef(null);

  const openMenu = (e) => {
    e.preventDefault();
    ulRef.current.classList.toggle("active");
  };

  const closeMenu = () => {
    ulRef.current.classList.remove("active");
  };

  return (
    <div className="header">
      <div className="logo">
        <svg
          width="279"
          height="50"
          viewBox="0 0 600 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100%" height="100%" fill="transparent" />
          <path
            d="M78 71.875C92.8427 71.875 104.875 59.8427 104.875 45C104.875 30.1573 92.8427 18.125 78 18.125C63.1573 18.125 51.125 30.1573 51.125 45C51.125 59.8427 63.1573 71.875 78 71.875Z"
            stroke="#0642F2"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M68.7025 38.6137V63.6937L96.6725 45.42L68.7025 26.3075"
            stroke="#0642F2"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.9375 42.625L36.1719 42.8594C42.9427 62.3385 47.474 72.1042 49.7656 72.1562C48.151 72.4688 45.9245 72.625 43.0859 72.625C40.5078 72.625 38.1641 72.1302 36.0547 71.1406C33.9974 70.151 32.3568 68.862 31.1328 67.2734C29.9089 65.6849 28.8542 63.9271 27.9688 62C27.1094 60.151 26.4323 58.237 25.9375 56.2578C25.4688 54.3568 25.0391 52.599 24.6484 50.9844C24.2578 49.3698 23.8672 48.0807 23.4766 47.1172C23.0859 46.1276 22.6172 45.6328 22.0703 45.6328V45.3984C24.362 45.3984 25.8594 44.9297 26.5625 43.9922C27.2656 43.0547 27.6172 40.8021 27.6172 37.2344C27.6172 32.7031 27.2266 28.4062 26.4453 24.3438C25.6641 20.2812 24.6875 18.25 23.5156 18.25C22.0312 18.25 21.2891 22.4557 21.2891 30.8672V57.4297C21.2891 61.1797 21.4323 64.0964 21.7188 66.1797C21.9792 68.1589 22.3307 69.4609 22.7734 70.0859C23.1641 70.6589 23.8932 71.3359 24.9609 72.1172H1.75781C2.7474 71.388 3.45052 70.6979 3.86719 70.0469C4.25781 69.4219 4.60938 68.1198 4.92188 66.1406C5.23438 64.1615 5.39062 61.2318 5.39062 57.3516V30.7891C5.39062 26.9609 5.23438 24.0443 4.92188 22.0391C4.60938 20.0339 4.25781 18.7188 3.86719 18.0938C3.45052 17.4427 2.7474 16.7526 1.75781 16.0234H25.0391C29.8568 16.0234 33.8542 17.3125 37.0312 19.8906C40.1823 22.4688 41.7578 26.1276 41.7578 30.8672C41.7839 36.0755 39.8438 39.9948 35.9375 42.625Z"
            fill="white"
          />
          <path
            d="M127.76 69H133.52L150.88 27.64H144.16L130.64 61.96L116.88 27.64H110.16L127.76 69ZM162.118 20.12C164.278 20.12 166.038 18.28 166.038 16.12C166.038 14.04 164.278 12.2 162.118 12.2C159.878 12.2 158.118 14.04 158.118 16.12C158.118 18.28 159.878 20.12 162.118 20.12ZM159.078 69H165.078V27.64H159.078V69ZM195.767 64.6C187.607 64.6 181.927 58.68 181.047 50.6H214.887C214.887 36.12 207.767 26.68 195.287 26.68C184.167 26.68 174.887 35.88 174.887 48.2C174.887 60.92 184.807 69.96 195.847 69.96C201.607 69.96 208.887 67.48 212.487 63.56L208.807 59.64C206.247 62.44 200.647 64.6 195.767 64.6ZM195.527 32.04C203.767 32.04 208.167 37.8 208.967 45.24H181.127C182.247 37.24 188.167 32.04 195.527 32.04ZM239.345 69.96C247.905 69.96 254.465 65.08 254.465 57.48C254.465 49.64 247.585 47.4 240.945 45.32C233.265 42.84 230.225 41.72 230.225 38.12C230.225 34.12 234.065 32.04 238.705 32.04C242.385 32.04 246.465 33.32 250.625 35.96L253.505 31.32C249.105 28.44 243.825 26.68 238.705 26.68C230.465 26.68 224.225 31.32 224.225 38.84C224.225 44.76 228.065 47.72 238.065 50.6C243.665 52.2 248.465 53.64 248.465 58.12C248.465 62.04 244.785 64.6 239.345 64.6C234.785 64.6 230.065 62.84 225.345 59.4L222.225 63.8C227.185 67.8 233.585 69.96 239.345 69.96Z"
            fill="white"
          />
          <path
            d="M268.553 69.96C270.873 69.96 272.793 67.96 272.793 65.56C272.793 63.32 270.873 61.32 268.553 61.32C266.073 61.32 264.153 63.32 264.153 65.56C264.153 67.96 266.073 69.96 268.553 69.96Z"
            fill="#0642F2"
          />
        </svg>
      </div>
      <div className="right">
        <ul ref={ulRef} className="header-links">
          <Link to="/">
            <li onClick={closeMenu}>
              <span>Home</span>
            </li>
          </Link>
          <Link to="/trending">
            <li onClick={closeMenu}>
              <span>Trending</span>
            </li>
          </Link>
          <Link to="/movies">
            <li onClick={closeMenu}>
              <span>Movies</span>
            </li>
          </Link>
          <Link to="/tv_shows">
            <li onClick={closeMenu}>
              <span>Tv Shows</span>
            </li>
          </Link>
          <Link to="">
            <li onClick={closeMenu}>
              <span>Register</span>
            </li>
          </Link>
          <Link to="">
            <li onClick={closeMenu}>
              <span>Login</span>
            </li>
          </Link>
        </ul>
        <div className="search">
          <span className="icon">
            <RiSearch2Line />
          </span>
        </div>
        <button onClick={openMenu} className="btn menu-icon">
          <span className="icon">
            <AiOutlineMenuFold />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
