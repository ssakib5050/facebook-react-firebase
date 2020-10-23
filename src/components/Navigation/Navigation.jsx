import React from "react";
import "./Navigation.css";

import { Scrollbars } from "react-custom-scrollbars";
import { Button, Dropdown } from "react-bootstrap";

import {
  FontAwesomeIcon,
  faFacebookF,
  faSearch,
  faUserAlt,
  faComment,
  faBell,
  faEllipsisV,
} from "../../fontawesome";

import { auth } from "../../firebase";

function Navigation() {
  return (
    <div className="nav__container_wrap">
      <div className="container nav__container_wrap  d-lg-flex d-none">
        <div className="nav__brand_wrap">
          <FontAwesomeIcon icon={faFacebookF} className="nav__brand_icon" />
        </div>
        <div className="nav__search_wrap ">
          <input
            type="text"
            className="nav__search_wrap_input"
            placeholder="Search"
          />
          <button className="nav__search_wrap_input_button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="nav__main_wrap">
          <div className="nav__tool">
            <span className="nav__image_profile_wrap">
              <div className="nav__image_wrap">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="nav__image"
                />
              </div>
              <a href="" className="nav__tool_a">
                Rajib
              </a>
            </span>

            <a href="" className="nav__tool_a">
              Home
            </a>
            <a href="" className="nav__tool_a">
              Create
            </a>
          </div>
          <div className="nav__icon_tool">
            <div className="nav__icon_tool_friend_request">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="nav__icon_tool_friend_request_toggle"
                >
                  <FontAwesomeIcon
                    icon={faUserAlt}
                    className="nav__icon_tool_friend_request_icon"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu id="nav__icon_tool_friend_request_toggle_menu">
                  <div className="dropdown__header">
                    <p className="font-weight-bold mb-0 nav__icon_tool_friend_request_toggle_menu_title">
                      Friend Request
                    </p>
                    <button className="nav__icon_tool_friend_request_toggle_menu_button">
                      Mark all as read
                    </button>
                  </div>
                  <div className="dropdown__content">
                    <Scrollbars style={{ height: 300 }}>
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                    </Scrollbars>
                  </div>
                  <div className="dropdown__footer ">
                    <button className="dropdown__footer_button">
                      View All
                    </button>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <span className="notification_indicate">8</span>
            </div>
            <div className="nav__icon_tool_messages ">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="nav__icon_tool_friend_request_toggle"
                >
                  <FontAwesomeIcon
                    icon={faComment}
                    className="nav__icon_tool_messages_icon"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu id="nav__icon_tool_friend_request_toggle_menu">
                  <div className="dropdown__header">
                    <p className="font-weight-bold mb-0 nav__icon_tool_friend_request_toggle_menu_title">
                      Messages
                    </p>
                    <button className="nav__icon_tool_friend_request_toggle_menu_button">
                      Mark all as read
                    </button>
                  </div>
                  <div className="dropdown__content">
                    <Scrollbars style={{ height: 300 }}>
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                    </Scrollbars>
                  </div>
                  <div className="dropdown__footer ">
                    <button className="dropdown__footer_button">
                      View All
                    </button>
                  </div>
                </Dropdown.Menu>
              </Dropdown>

              <span className="notification_indicate">8</span>
            </div>
            <div className="nav__icon_tool_notifications ">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="nav__icon_tool_friend_request_toggle"
                >
                  <FontAwesomeIcon
                    icon={faBell}
                    className="nav__icon_tool_notifications_icon"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu id="nav__icon_tool_friend_request_toggle_menu">
                  <div className="dropdown__header">
                    <p className="font-weight-bold mb-0 nav__icon_tool_friend_request_toggle_menu_title">
                      Notifications
                    </p>
                    <button className="nav__icon_tool_friend_request_toggle_menu_button">
                      Mark all as read
                    </button>
                  </div>
                  <div className="dropdown__content">
                    <Scrollbars style={{ height: 300 }}>
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                      <Item />
                    </Scrollbars>
                  </div>
                  <div className="dropdown__footer ">
                    <button className="dropdown__footer_button">
                      View All
                    </button>
                  </div>
                </Dropdown.Menu>
              </Dropdown>

              <span className="notification_indicate">8</span>
            </div>

            <Dropdown className="nav__icon_tool_more_dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <div className="nav__icon_tool_more">
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    className="nav__icon_tool_more_icon"
                  />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="nav__dropdown_item">
                  Manage Groups
                </Dropdown.Item>
                <Dropdown.Item className="nav__dropdown_item">
                  Advertising on Facebook
                </Dropdown.Item>
                <Dropdown.Item className="nav__dropdown_item">
                  Acitivity Log
                </Dropdown.Item>
                <Dropdown.Item className="nav__dropdown_item">
                  News Feed Preferences
                </Dropdown.Item>
                <Dropdown.Item className="nav__dropdown_item">
                  Settings
                </Dropdown.Item>
                <Dropdown.Item
                  className="nav__dropdown_item"
                  onClick={() => auth.signOut()}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="d-lg-none d-flex w-100 nav__container">
        <button className="nav__container_sm_button_wrap">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="nav__container_sm_button_wrap_icon"
          />
        </button>
        <button className="nav__container_sm_button_wrap">
          <FontAwesomeIcon
            icon={faSearch}
            className="nav__container_sm_button_wrap_icon"
          />
        </button>

        <button className="nav__container_sm_button_wrap">
          <FontAwesomeIcon
            icon={faComment}
            className="nav__container_sm_button_wrap_icon"
          />
          <span className="nav__container_sm_button_wrap_icon_notification">
            12
          </span>
        </button>
        <button className="nav__container_sm_button_wrap">
          <FontAwesomeIcon
            icon={faBell}
            className="nav__container_sm_button_wrap_icon"
          />
          <span className="nav__container_sm_button_wrap_icon_notification">
            12
          </span>
        </button>
        <button className="nav__container_sm_button_wrap">
          <FontAwesomeIcon
            icon={faUserAlt}
            className="nav__container_sm_button_wrap_icon"
          />
        </button>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="dropdown__content_main_wrap">
      <div className="dropdown__content_img_wrap">
        <img
          src="https://via.placeholder.com/150/"
          alt=""
          className="dropdown_content_img"
        />
      </div>
      <div className="dropdown__content_username_wrap">
        <p className="mb-0">Random Person</p>
      </div>
      <div className="dropdown__content_button_wrap">
        <button className="dropdown__content_button_confirm">Confirm</button>
        <button className="dropdown__content_button_delete">Delete</button>
      </div>
    </div>
  );
}

export default Navigation;
