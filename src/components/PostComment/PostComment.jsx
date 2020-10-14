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
    <>
      <div className="postComment__wrap">
        <div className="postComment_container_left">
          <div className="postComment_image_wrap">
            <img
              src="https://via.placeholder.com/100x100"
              alt=""
              className="postComment_image"
            />
          </div>
          <div className="postComment_comment">
            <p className="postComment_comment_name">MD Sadman Sakib</p>
            <p className="postComment_comment_text">
              Hello World Hello World Hello World Hello World Hello World Hello
              World Hello World Hello World Hello World Hello World Hello World
              Hello World Hello World Hello World Hello World
            </p>
          </div>
        </div>
        <div className="postComment__more_wrap">
          <button className="postComment__more_wrap_btn">
            <FontAwesomeIcon
              icon={faEllipsisH}
              className="postComment__more_wrap_btn_icon"
            />
          </button>
        </div>
      </div>
      <div className="postComment__like_comment_share dev">
        <button className="postComment__like_comment_share_like">
          Like
          <div className="reaction-box"></div>
          {/*  */}
          <div className="post__main_reactions">
            <button
              className="post__main_reactions_button post__main_reactions_button_like"
              onClick={() => reactionInsert("like")}
            >
              <img
                src="\assets\images\icons\big\like-reaction.png"
                className="post__main_reactions_button_img post__main_reactions_button_img_like"
              />
            </button>
            <button
              className="post__main_reactions_button post__main_reactions_button_love"
              onClick={() => reactionInsert("love")}
            >
              <img
                src="\assets\images\icons\big\love-reaction.png"
                className="post__main_reactions_button_img post__main_reactions_button_img_love"
              />
            </button>
            <button
              className="post__main_reactions_button post__main_reactions_button_care"
              onClick={() => reactionInsert("care")}
            >
              <img
                src="\assets\images\icons\big\care-reaction.png"
                className="post__main_reactions_button_img post__main_reactions_button_img_care"
              />
            </button>
            <button
              className="post__main_reactions_button post__main_reactions_button_haha"
              onClick={() => reactionInsert("haha")}
            >
              <img
                src="\assets\images\icons\big\haha-reaction.png"
                className="post__main_reactions_button_img post__main_reactions_button_img_haha"
              />
            </button>
            <button
              className="post__main_reactions_button post__main_reactions_button_wow"
              onClick={() => reactionInsert("wow")}
            >
              <img
                src="\assets\images\icons\big\wow-reaction.png"
                className="post__main_reactions_button_img post__main_reactions_button_img_wow"
              />
            </button>
            <button
              className="post__main_reactions_button post__main_reactions_button_sad"
              onClick={() => reactionInsert("sad")}
            >
              <img
                src="\assets\images\icons\big\sad-reaction.png"
                className="post__main_reactions_button_img post__main_reactions_button_img_sad"
              />
            </button>
            <button
              className="post__main_reactions_button post__main_reactions_button_angry"
              onClick={() => reactionInsert("angry")}
            >
              <img
                src="\assets\images\icons\big\angry-reaction.png"
                className="post__main_reactions_button_img post__main_reactions_button_img_angry"
              />
            </button>
          </div>
          {/*  */}
        </button>{" "}
        ⋅
        <button className="postComment__like_comment_share_comment">
          Comment
        </button>
        ⋅<p className="mb-0 postComment__like_comment_timeline">14min</p>⋅
        <div className="comment_infos_likes">
          {/*  */}
          <PostReaction postReactions={postReactions} />
          <span className="comment_infos_count">
            {Object.keys(postReactions).length}
          </span>

          {/*  */}
        </div>
      </div>
    </>
  );
}

export default PostComment;
