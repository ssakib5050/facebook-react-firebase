import React, { useState } from "react";
import "./Post.css";

import {
  FontAwesomeIcon,
  faEllipsisV,
  faEllipsisH,
  faSave,
  faHistory,
  faRandom,
  faAlignJustify,
  faEyeSlash,
  faExclamationTriangle,
  faBellSlash,
  faClock,
  faThumbsUp,
  faCommentRegular,
  faShareSquare,
} from "../../fontawesome";
import { Dropdown } from "react-bootstrap";
import PostReaction from "../PostReaction/PostReaction";

function Post({ postProfileImage, postImage, postName, postText }) {
  const [postReactions, setPostReactions] = useState({
    like: 5,
    love: 10,
    care: 0,
    haha: 100,
    wow: 0,
    sad: 0,
    angry: 20,
  });

  // const sorted_reaction = Object.keys(postReactions).sort(
  //   (a, b) => postReactions[b] - postReactions[a]
  // );

  console.log(Object.keys(postReactions).length);

  return (
    <div className="post__container_wrap">
      <div className="post__container">
        <div className="post_container_header">
          <div className="post_container_header_first">
            <div className="post_img_wrap">
              <img src={postProfileImage} alt="" className="post_img" />
            </div>
            <div>
              <p className="post_name">{postName}</p>
              <p className="post_timestamp text-muted">1 min</p>
            </div>
          </div>
          <div className="post_more_icon_wrap ">
            <Dropdown className="post_more_icon_wrap_dropdown" drop="left">
              <Dropdown.Toggle
                variant="success"
                className="post_more_icon_wrap_dropdownpost_more_icon_wrap_dropdown_button"
              >
                <FontAwesomeIcon
                  icon={faEllipsisH}
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
        <div className="post__content_wrap">
          <div className="post__content_wrap_text">{postText}</div>
          <img src={postImage} alt="" className="post__content_wrap_img" />
        </div>
        <div className="comment_infos">
          <div className="comment_infos_likes">
            {/*  */}
            <PostReaction postReactions={postReactions} />
            <span className="comment_infos_count">
              {Object.keys(postReactions).length}
            </span>

            {/*  */}
          </div>

          <div className="comment_infos_comments_shares">
            <button className="comment_infos_comments_shares_btn">
              145 Comments
            </button>
          </div>
        </div>
        <div className="post__like_comment_share_panel">
          <button className="post__like_comment_share_panel_button">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="post__like_comment_share_panel_button_icon"
            />
            <span>Like</span>
          </button>
          <button className="post__like_comment_share_panel_button">
            <FontAwesomeIcon
              icon={faCommentRegular}
              className="post__like_comment_share_panel_button_icon"
            />
            <span>Comment</span>
          </button>
          <button className="post__like_comment_share_panel_button">
            <FontAwesomeIcon
              icon={faShareSquare}
              className="post__like_comment_share_panel_button_icon"
            />
            <span>Share</span>
          </button>
        </div>
        s
      </div>
    </div>
  );
}

export default Post;
