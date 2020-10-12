import React from "react";
import "./Post.css";

import {
  FontAwesomeIcon,
  faEllipsisV,
  faSave,
  faHistory,
  faRandom,
  faAlignJustify,
  faEyeSlash,
  faExclamationTriangle,
  faBellSlash,
  faClock,
} from "../../fontawesome";
import { Dropdown } from "react-bootstrap";

function Post() {
  return (
    <div className="post__container_wrap">
      <div className="post__container">
        <div className="post_container_header dev">
          <div className="post_container_header_first">
            <div className="post_img_wrap">
              <img
                src="https://via.placeholder.com/150"
                alt=""
                className="post_img"
              />
            </div>
            <div>
              <p className="post_name">MD Sadman Sakib</p>
              <p className="post_timestamp text-muted">1 min ago</p>
            </div>
          </div>
          <div className="post_more_icon_wrap dev">
            <Dropdown className="post_more_icon_wrap_dropdown" drop="left">
              <Dropdown.Toggle
                variant="success"
                className="post_more_icon_wrap_dropdownpost_more_icon_wrap_dropdown_button"
              >
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  className="post_more_icon_wrap_dropdownpost_more_icon_wrap_dropdown_button_icon"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="post_more_icon_wrap_dropdown_menu">
                <Dropdown.Item className="post_more_icon_wrap_dropdown_menu_icon">
                  <FontAwesomeIcon
                    icon={faSave}
                    className="post_more_icon_wrap_dropdown_menu_icon_icon"
                  />
                  <p>Save Post</p>
                </Dropdown.Item>
                <Dropdown.Item className="post_more_icon_wrap_dropdown_menu_icon">
                  <FontAwesomeIcon
                    icon={faHistory}
                    className="post_more_icon_wrap_dropdown_menu_icon_icon"
                  />
                  <p>View Edit History</p>
                </Dropdown.Item>
                <Dropdown.Item className="post_more_icon_wrap_dropdown_menu_icon">
                  <FontAwesomeIcon
                    icon={faRandom}
                    className="post_more_icon_wrap_dropdown_menu_icon_icon"
                  />
                  <p>Turn on notification for this post</p>
                </Dropdown.Item>
                <Dropdown.Item className="post_more_icon_wrap_dropdown_menu_icon">
                  <FontAwesomeIcon
                    icon={faAlignJustify}
                    className="post_more_icon_wrap_dropdown_menu_icon_icon"
                  />
                  <p>Embeded</p>
                </Dropdown.Item>
                <Dropdown.Item className="post_more_icon_wrap_dropdown_menu_icon">
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="post_more_icon_wrap_dropdown_menu_icon_icon"
                  />
                  <p>Hide Post</p>
                </Dropdown.Item>
                <Dropdown.Item className="post_more_icon_wrap_dropdown_menu_icon">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="post_more_icon_wrap_dropdown_menu_icon_icon"
                  />
                  <p>Snooze</p>
                </Dropdown.Item>
                <Dropdown.Item className="post_more_icon_wrap_dropdown_menu_icon">
                  <FontAwesomeIcon
                    icon={faBellSlash}
                    className="post_more_icon_wrap_dropdown_menu_icon_icon"
                  />
                  <p>Mute</p>
                </Dropdown.Item>
                <Dropdown.Item className="post_more_icon_wrap_dropdown_menu_icon">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="post_more_icon_wrap_dropdown_menu_icon_icon"
                  />
                  <p>Report</p>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
