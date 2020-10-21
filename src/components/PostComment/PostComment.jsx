import React, { useState } from "react";
import "./PostComment.css";

import { FontAwesomeIcon, faEllipsisH } from "../../fontawesome";
import PostReaction from "../PostReaction/PostReaction";

function PostComment() {
  const [postReacted, setPostReacted] = useState("angry");
  const [postReactions, setPostReactions] = useState({
    like: 5,
    love: 10,
    care: 0,
    haha: 100,
    wow: 0,
    sad: 0,
    angry: 20,
  });

  const reactionInsert = (e) => {
    if (postReacted) {
      setPostReacted(null);
    } else {
      setPostReacted(e);
    }
  };

  return (
    <div className="post__comment_wrap">
      <div className="post__comment_wrap_top">
        <div className="post__comment_img_wrap">
          <img
            src="https://via.placeholder.com/100"
            alt=""
            className="post__comment_img"
          />
        </div>
        <div className="post__comment_text_wrap">
          <p className="post__comment_text">Hello World</p>
        </div>
        <div className="post__comment_more_wrap">
          <FontAwesomeIcon icon={faEllipsisH} className="post__comment_more" />
        </div>
      </div>
      <div className="post_comment_like_comment_info">
        <button className="post_comment_like_comment_info_like">
          Like
          <div className="comment-reaction-box"></div>
          <div className="comment-reaction-like ">
            <img src="assets\images\icons\big\like-reaction.png" alt="" />
          </div>
          <div className="comment-reaction-love ">
            <img src="assets\images\icons\big\love-reaction.png" alt="" />
          </div>
          <div className="comment-reaction-care ">
            <img src="assets\images\icons\big\care-reaction.png" alt="" />
          </div>
          <div className="comment-reaction-haha ">
            <img src="assets\images\icons\big\haha-reaction.png" alt="" />
          </div>
          <div className="comment-reaction-wow ">
            <img src="assets\images\icons\big\wow-reaction.png" alt="" />
          </div>
          <div className="comment-reaction-sad ">
            <img src="assets\images\icons\big\sad-reaction.png" alt="" />
          </div>
          <div className="comment-reaction-angry ">
            <img src="assets\images\icons\big\angry-reaction.png" alt="" />
          </div>
        </button>
        ·
        <button className="post_comment_like_comment_info_comment">
          Comment
        </button>
        · <span className="post_comment_like_comment_info_timeline">1h</span>
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
      </div>
    </div>
  );
}

export default PostComment;
