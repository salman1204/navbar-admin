import React from 'react';
import './TopNav.css'
import { FiSearch } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const TopNav = () => {
    return (
        <div className="top__nav">
      <div>
        <p className="welcome__text">Welcome to Amar Teacher</p>
      </div>
      <div className="box__container">
        <table className="elements__container">
          <tr>
            <td>
              <input type="text" placeholder="Search" className="search" />
            </td>
            <td>
              <a href="#">
                <FiSearch style={{ color: "#a3a2a2" }} />
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <AiOutlineMail className="icon" />
        <span class="notification__badge">4</span>
        <IoNotificationsOutline className="icon" />
        <span class="notification__badge orange__badge">4</span>
        <CgProfile className="icon" />
      </div>
    </div>

    );
};

export default TopNav;