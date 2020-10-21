import React, { useState } from "react";
import "./Post.css";

import {
  FontAwesomeIcon,
  faEllipsisH,
  faEyeSlash,
  faClock,
  faShareSquare,
  faThumbsUp,
  faBookmark,
  faBellRegular,
  faFileCode,
  faTimesCircle,
  faFlag,
  faCommentRegular,
} from "../../fontawesome";
import { Dropdown } from "react-bootstrap";
import PostReaction from "../PostReaction/PostReaction";
import PostReactionSelected from "../PostReactionSelected/PostReactionSelected";
import PostComment from "../PostComment/PostComment";
import PostCommentInput from "../PostCommentInput/PostCommentInput";

function Post({
  postId,
  postProfileImage,
  postUsername,
  postTimestamp,
  postText,
  postImage,
  postReactions,
  /**/

  postName,
}) {
  const [postReacted, setPostReacted] = useState("angry");
  // Temo -> down
  const [reaction, setReaction] = useState("angry");
  const [comments, setComments] = useState([]);
  // const [postReactions, setPostReactions] = useState({
  //   like: 5,
  //   love: 10,
  //   care: 0,
  //   haha: 100,
  //   wow: 0,
  //   sad: 0,
  //   angry: 20,
  // });

  const sorted_reaction = postReactions
    ? Object.keys(postReactions).sort(
        (a, b) => postReactions[b] - postReactions[a]
      )
    : "";

  // console.log(postReacted);

  const reactionInsert = (e) => {
    if (postReacted) {
      setPostReacted(null);
    } else {
      setPostReacted(e);
    }
  };

  return (
    <div className="post">
      <div className="post__head">
        <div className="post__img_wrapper">
          <img
            src="https://via.placeholder.com/150/"
            alt=""
            className="post__main_img"
          />
        </div>
        <div className="post__header_middle">
          <h6 className="post__header_middle_name">MD Sadman Sakib</h6>
          <p className="post__header_middle_timeline">2h</p>
        </div>

        <Dropdown drop="left" className="post__more_dropdown">
          <Dropdown.Toggle
            variant="success"
            className="post__header_last dropleft"
          >
            <FontAwesomeIcon icon={faEllipsisH} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="post__header_last_dropdown_item">
              <FontAwesomeIcon
                icon={faBookmark}
                className="post__header_last_dropdown_item_icon"
              />
              <div className="post__header_last_dropdown_item_name">
                Save Post
              </div>
            </div>

            <div className="post__header_last_dropdown_item">
              <FontAwesomeIcon
                icon={faBellRegular}
                className="post__header_last_dropdown_item_icon"
              />
              <div className="post__header_last_dropdown_item_name">
                Turn on notifications for this post
              </div>
            </div>

            <div className="post__header_last_dropdown_item">
              <FontAwesomeIcon
                icon={faFileCode}
                className="post__header_last_dropdown_item_icon"
              />
              <div className="post__header_last_dropdown_item_name">Snooze</div>
            </div>

            <div className="post__header_last_dropdown_item">
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="post__header_last_dropdown_item_icon"
              />
              <div className="post__header_last_dropdown_item_name">Embed</div>
            </div>

            <div className="post__header_last_dropdown_item">
              <FontAwesomeIcon
                icon={faClock}
                className="post__header_last_dropdown_item_icon"
              />
              <div className="post__header_last_dropdown_item_name">Hide</div>
            </div>

            <div className="post__header_last_dropdown_item">
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="post__header_last_dropdown_item_icon"
              />
              <div className="post__header_last_dropdown_item_name">
                Unfollow
              </div>
            </div>

            <div className="post__header_last_dropdown_item">
              <FontAwesomeIcon
                icon={faFlag}
                className="post__header_last_dropdown_item_icon"
              />
              <div className="post__header_last_dropdown_item_name">Report</div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="post__postContent">
        <img
          src="https://via.placeholder.com/720x480"
          alt=""
          className="post__post_img"
        />

        <p className="post__post_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          sapiente? Provident ut incidunt ab iure aspernatur molestias
          consectetur maxime similique porro voluptatum cum corporis veritatis a
          itaque sit, magni totam suscipit, ea laudantium deserunt cupiditate
          facilis perferendis? Autem itaque, repellat modi eos accusantium sequi
          quas ea porro labore amet ducimus.
        </p>
      </div>
      <div className="post__infos">
        <div className="post__reaction_view">
          <img
            src="/assets/images/icons/small/like-reaction.png"
            alt=""
            className="post__reaction_view_img"
          />
          <img
            src="/assets/images/icons/small/like-reaction.png"
            alt=""
            className="post__reaction_view_img"
          />
          <img
            src="/assets/images/icons/small/like-reaction.png"
            alt=""
            className="post__reaction_view_img"
          />
          {/* <img src="/assets/images/icons/small/like-reaction.png" alt=""  className="post__reaction_view_img"/>
          <img src="/assets/images/icons/small/like-reaction.png" alt=""  className="post__reaction_view_img"/> */}
          <span className="post__reaction_view_img_reactions">100</span>
        </div>
        <div className="post__comment_view">Comments</div>
      </div>

      <div className="post__like_comment_share">
        <div className="post_like">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="post__like_comment_share_icon"
          />
          <span className="post__like_comment_share_text">Like</span>

          <div className="reaction-box"></div>
          <div className="reaction-like ">
            <img src="assets\images\icons\big\like-reaction.png" alt="" />
          </div>
          <div className="reaction-love ">
            <img src="assets\images\icons\big\love-reaction.png" alt="" />
          </div>
          <div className="reaction-care ">
            <img src="assets\images\icons\big\care-reaction.png" alt="" />
          </div>
          <div className="reaction-haha ">
            <img src="assets\images\icons\big\haha-reaction.png" alt="" />
          </div>
          <div className="reaction-wow ">
            <img src="assets\images\icons\big\wow-reaction.png" alt="" />
          </div>
          <div className="reaction-sad ">
            <img src="assets\images\icons\big\sad-reaction.png" alt="" />
          </div>
          <div className="reaction-angry ">
            <img src="assets\images\icons\big\angry-reaction.png" alt="" />
          </div>
        </div>

        <div className="post_comment">
          <FontAwesomeIcon
            icon={faCommentRegular}
            className="post__like_comment_share_icon"
          />
          <span className="post__like_comment_share_text">Comment</span>
        </div>
        <div className="post_share">
          <FontAwesomeIcon
            icon={faShareSquare}
            className="post__like_comment_share_icon"
          />
          <span className="post__like_comment_share_text">Share</span>
        </div>
      </div>

      <PostCommentInput />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
    </div>
  );
}

function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + "s";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + "m";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + "h";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + "d";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + "m";
  } else {
    return Math.round(elapsed / msPerYear) + "y";
  }
}
export default Post;
