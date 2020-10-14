import React from "react";
import "./PostReactionSelected.css";

import { FontAwesomeIcon, faThumbsUp } from "../../fontawesome";

function PostReactionSelected({ postReacted }) {
  // console.log(postReacted);

  const postReactedSetup = () => {
    switch (postReacted) {
      case "like":
        return (
          <div className="post__reaction_panel">
            <img src="\assets\images\icons\small\like-reaction.png" alt="" />
            <span className="post__like_reaction_text">Like</span>
          </div>
        );
      case "love":
        return (
          <div className="post__reaction_panel">
            <img src="\assets\images\icons\small\love-reaction.png" alt="" />
            <span className="post__love_reaction_text">Love</span>
          </div>
        );
      case "care":
        return (
          <div className="post__reaction_panel">
            <img src="\assets\images\icons\small\care-reaction.png" alt="" />
            <span className="post__care_reaction_text">Care</span>
          </div>
        );
      case "haha":
        return (
          <div className="post__reaction_panel">
            <img src="\assets\images\icons\small\haha-reaction.png" alt="" />
            <span className="post__haha_reaction_text">Haha</span>
          </div>
        );
      case "wow":
        return (
          <div className="post__reaction_panel">
            <img src="\assets\images\icons\small\wow-reaction.png" alt="" />
            <span className="post__wow_reaction_text">Wow</span>
          </div>
        );
      case "sad":
        return (
          <div className="post__reaction_panel">
            <img src="\assets\images\icons\small\sad-reaction.png" alt="" />
            <span className="post__sad_reaction_text">Sad</span>
          </div>
        );
      case "angry":
        return (
          <div className="post__reaction_panel">
            <img src="\assets\images\icons\small\angry-reaction.png" alt="" />
            <span className="post__angry_reaction_text">Angry</span>
          </div>
        );
      default:
        return (
          <>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="post__like_comment_share_panel_button_icon"
            />
            <span>Like</span>
          </>
        );
    }
  };
  return postReactedSetup();
}

export default PostReactionSelected;
