import React from "react";
import "./RightSidebar.css";

function RightSidebar() {
  return (
    <div>
      <div className="right-sidebar">
        <div className="right-sidebar-friend-request">
          <h2 className="right-sidebar-title">Friend Request</h2>
          <div>
            <Item name="Taskin Arman" />
            <Item name="Taskin Arman" />
            <Item name="Taskin Arman" />
          </div>
        </div>

        <div className="right-sidebar-know">
          <h2 className="right-sidebar-title">People you may know</h2>
          <div>
            <Item name="Taskin Arman" type="know" />
            <Item name="Taskin Arman" type="know" />
            <Item name="Taskin Arman" type="know" />
          </div>
        </div>

        <div className="right-sidebar-language">
          <button className="right-sidebar-language-item">English (UK)</button>
          <button className="right-sidebar-language-item">বাংলা</button>
          <button className="right-sidebar-language-item">English (US)</button>
          <button className="right-sidebar-language-item">আসমীয়া</button>
          <button className="right-sidebar-language-item">Español</button>
        </div>

        <div className="right-sidebar-last-menu">
          <button className="right-sidebar-last-menu-item">Privacy</button>
          <button className="right-sidebar-last-menu-item">Terms</button>
          <button className="right-sidebar-last-menu-item">Advertising</button>
          <button className="right-sidebar-last-menu-item">AdChoice</button>
          <button className="right-sidebar-last-menu-item">Cookies</button>
          <button className="right-sidebar-last-menu-item">More</button>
        </div>

        <div className="right-sidebar-copyright">
          <span className="right-sidebar-copyright-item">
            Facebook &copy; 2020
          </span>
        </div>
      </div>
    </div>
  );
}

function Item({ type }) {
  return (
    <div className="right-sidebar-item">
      <div>
        <img
          src="https://via.placeholder.com/150/"
          alt=""
          className="right-sidebar-img"
        />
        <span className="right-sidebar-name">MD Sadman Sakib</span>
      </div>

      <div className="right-sidebar-btn">
        <button className="right-sidebar-btn-accept">
          {type ? "Add Friend" : "Confirm"}
        </button>
        <button className="right-sidebar-btn-reject">
          {type ? "Remove" : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default RightSidebar;
