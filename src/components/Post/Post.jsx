import React, { useState, useEffect } from "react";
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
import { db } from "../../firebase";

function Post({
  postId,
  postProfileImage,
  postUsername,
  postTimestamp,
  postText,
  postImage,
  postReactions,
  //
  postMainUsername,
}) {
  const [commentHide, setCommentHide] = useState(true); //Default False
  const [postReacted, setPostReacted] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((snapshot) =>
        setComments(
          snapshot.docs.map((doc) => ({ commentId: doc.id, ...doc.data() }))
        )
      );
  }, []);

  // console.log("comments -> ", comments);

  useEffect(() => {
    if (postReactions.like.find((like) => like === postUsername)) {
      setPostReacted("like");
    } else if (postReactions.love.find((love) => love === postUsername)) {
      setPostReacted("love");
    } else if (postReactions.care.find((care) => care === postUsername)) {
      setPostReacted("care");
    } else if (postReactions.haha.find((haha) => haha === postUsername)) {
      setPostReacted("haha");
    } else if (postReactions.wow.find((wow) => wow === postUsername)) {
      setPostReacted("wow");
    } else if (postReactions.sad.find((sad) => sad === postUsername)) {
      setPostReacted("sad");
    } else if (postReactions.angry.find((angry) => angry === postUsername)) {
      setPostReacted("angry");
    }
  }, []);

  const reaction_count = () => {
    return (
      postReactions.like.length +
      postReactions.love.length +
      postReactions.care.length +
      postReactions.haha.length +
      postReactions.wow.length +
      postReactions.sad.length +
      postReactions.angry.length
    );
  };

  const tempObj = {
    like: postReactions.like.length,
    love: postReactions.love.length,
    care: postReactions.care.length,
    haha: postReactions.haha.length,
    wow: postReactions.wow.length,
    sad: postReactions.sad.length,
    angry: postReactions.angry.length,
  };

  const sorted_reaction = Object.keys(tempObj).sort(
    (a, b) => tempObj[b] - tempObj[a]
  );

  const reactionInsert = (e) => {
    // console.log(e);

    const userReactedLike = postReactions.like.find(
      (like) => like === postUsername
    );

    const userReactedLove = postReactions.love.find(
      (love) => love === postUsername
    );

    const userReactedCare = postReactions.care.find(
      (care) => care === postUsername
    );
    const userReactedHaha = postReactions.haha.find(
      (haha) => haha === postUsername
    );
    const userReactedWow = postReactions.wow.find(
      (wow) => wow === postUsername
    );
    const userReactedSad = postReactions.sad.find(
      (sad) => sad === postUsername
    );
    const userReactedAngry = postReactions.angry.find(
      (angry) => angry === postUsername
    );

    // console.log(userReactedLike);

    if (
      userReactedLike ||
      userReactedLove ||
      userReactedCare ||
      userReactedHaha ||
      userReactedWow ||
      userReactedSad ||
      userReactedAngry
    ) {
      // console.log("YEss");
      db.collection("posts")
        .doc(postId)
        .update({
          postReactions: {
            like: postReactions.like.filter((like) => like != postUsername),
            love: postReactions.love.filter((love) => love != postUsername),
            care: postReactions.care.filter((care) => care != postUsername),
            haha: postReactions.haha.filter((haha) => haha != postUsername),
            wow: postReactions.wow.filter((wow) => wow != postUsername),
            sad: postReactions.sad.filter((sad) => sad != postUsername),
            angry: postReactions.angry.filter((angry) => angry != postUsername),
          },
        });
    } else {
      switch (e) {
        case "like":
          db.collection("posts")
            .doc(postId)
            .update({
              postReactions: {
                like: [...postReactions.like, postUsername],
                love: [...postReactions.love],
                care: [...postReactions.care],
                haha: [...postReactions.haha],
                wow: [...postReactions.wow],
                sad: [...postReactions.sad],
                angry: [...postReactions.angry],
              },
            });
          break;
        case "love":
          db.collection("posts")
            .doc(postId)
            .update({
              postReactions: {
                like: [...postReactions.like],
                love: [...postReactions.love, postUsername],
                care: [...postReactions.care],
                haha: [...postReactions.haha],
                wow: [...postReactions.wow],
                sad: [...postReactions.sad],
                angry: [...postReactions.angry],
              },
            });
          break;

        case "care":
          db.collection("posts")
            .doc(postId)
            .update({
              postReactions: {
                like: [...postReactions.like],
                love: [...postReactions.love],
                care: [...postReactions.care, postUsername],
                haha: [...postReactions.haha],
                wow: [...postReactions.wow],
                sad: [...postReactions.sad],
                angry: [...postReactions.angry],
              },
            });
          break;

        case "haha":
          db.collection("posts")
            .doc(postId)
            .update({
              postReactions: {
                like: [...postReactions.like],
                love: [...postReactions.love],
                care: [...postReactions.care],
                haha: [...postReactions.haha, postUsername],
                wow: [...postReactions.wow],
                sad: [...postReactions.sad],
                angry: [...postReactions.angry],
              },
            });
          break;

        case "wow":
          db.collection("posts")
            .doc(postId)
            .update({
              postReactions: {
                like: [...postReactions.like],
                love: [...postReactions.love],
                care: [...postReactions.care],
                haha: [...postReactions.haha],
                wow: [...postReactions.wow, postUsername],
                sad: [...postReactions.sad],
                angry: [...postReactions.angry],
              },
            });
          break;

        case "sad":
          db.collection("posts")
            .doc(postId)
            .update({
              postReactions: {
                like: [...postReactions.like],
                love: [...postReactions.love],
                care: [...postReactions.care],
                haha: [...postReactions.haha],
                wow: [...postReactions.wow],
                sad: [...postReactions.sad, postUsername],
                angry: [...postReactions.angry],
              },
            });
          break;

        case "angry":
          db.collection("posts")
            .doc(postId)
            .update({
              postReactions: {
                like: [...postReactions.like],
                love: [...postReactions.love],
                care: [...postReactions.care],
                haha: [...postReactions.haha],
                wow: [...postReactions.wow],
                sad: [...postReactions.sad],
                angry: [...postReactions.angry, postUsername],
              },
            });
          break;
      }
      console.log("Noo");
    }

    // console.log("Check -----> ", userReacted);

    if (postReacted) {
      setPostReacted(null);
    } else {
      setPostReacted(e);
    }
  };

  const commentButtonClick = () => {
    setCommentHide(!commentHide);
  };

  const firstReaction = () => {
    switch (sorted_reaction[0]) {
      case "like":
        return (
          sorted_reaction[0] === "like" && (
            <img
              src="/assets/images/icons/small/like-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );
      case "love":
        return (
          sorted_reaction[0] === "love" && (
            <img
              src="/assets/images/icons/small/love-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "care":
        return (
          sorted_reaction[0] === "care" && (
            <img
              src="/assets/images/icons/small/care-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "haha":
        return (
          sorted_reaction[0] === "haha" && (
            <img
              src="/assets/images/icons/small/haha-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "wow":
        return (
          sorted_reaction[0] === "wow" && (
            <img
              src="/assets/images/icons/small/wow-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "sad":
        return (
          sorted_reaction[0] === "sad" && (
            <img
              src="/assets/images/icons/small/sad-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "angry":
        return (
          sorted_reaction[0] === "angry" && (
            <img
              src="/assets/images/icons/small/angry-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );
      default:
        return null;
    }
  };

  const secondReaction = () => {
    switch (sorted_reaction[1]) {
      case "like":
        return (
          sorted_reaction[1] === "like" && (
            <img
              src="/assets/images/icons/small/like-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );
      case "love":
        return (
          sorted_reaction[1] === "love" && (
            <img
              src="/assets/images/icons/small/love-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "care":
        return (
          sorted_reaction[1] === "care" && (
            <img
              src="/assets/images/icons/small/care-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "haha":
        return (
          sorted_reaction[1] === "haha" && (
            <img
              src="/assets/images/icons/small/haha-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "wow":
        return (
          sorted_reaction[1] === "wow" && (
            <img
              src="/assets/images/icons/small/wow-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "sad":
        return (
          sorted_reaction[1] === "sad" && (
            <img
              src="/assets/images/icons/small/sad-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "angry":
        return (
          sorted_reaction[1] === "angry" && (
            <img
              src="/assets/images/icons/small/angry-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );
      default:
        return null;
    }
  };

  const thirdReaction = () => {
    switch (sorted_reaction[2]) {
      case "like":
        return (
          sorted_reaction[2] === "like" && (
            <img
              src="/assets/images/icons/small/like-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );
      case "love":
        return (
          sorted_reaction[2] === "love" && (
            <img
              src="/assets/images/icons/small/love-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "care":
        return (
          sorted_reaction[2] === "care" && (
            <img
              src="/assets/images/icons/small/care-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "haha":
        return (
          sorted_reaction[2] === "haha" && (
            <img
              src="/assets/images/icons/small/haha-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "wow":
        return (
          sorted_reaction[2] === "wow" && (
            <img
              src="/assets/images/icons/small/wow-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "sad":
        return (
          sorted_reaction[2] === "sad" && (
            <img
              src="/assets/images/icons/small/sad-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );

      case "angry":
        return (
          sorted_reaction[2] === "angry" && (
            <img
              src="/assets/images/icons/small/angry-reaction.png"
              alt=""
              className="post__reaction_view_img"
            />
          )
        );
      default:
        return null;
    }
  };

  const firstReactionCount = () => {
    switch (sorted_reaction[0]) {
      case "like":
        if (postReactions.like.length !== 0) {
          return postReactions.like.length;
        }

        return false;
      case "love":
        if (postReactions.love.length !== 0) {
          return postReactions.love.length;
        }

        return false;
      case "care":
        if (postReactions.care.length !== 0) {
          return postReactions.care.length;
        }

        return false;
      case "haha":
        if (postReactions.haha.length !== 0) {
          return postReactions.haha.length;
        }

        return false;
      case "wow":
        if (postReactions.wow.length !== 0) {
          return postReactions.wow.length;
        }

        return false;
      case "sad":
        if (postReactions.sad.length !== 0) {
          return postReactions.sad.length;
        }

        return false;
      case "angry":
        if (postReactions.angry.length !== 0) {
          return postReactions.angry.length;
        }
        return false;
    }
  };

  const secondReactionCount = () => {
    switch (sorted_reaction[1]) {
      case "like":
        if (postReactions.like.length !== 0) {
          return postReactions.love.length;
        }
        return false;
      case "love":
        if (postReactions.love.length !== 0) {
          return postReactions.love.length;
        }
        return false;
      case "care":
        if (postReactions.care.length !== 0) {
          return postReactions.care.length;
        }
        return false;
      case "haha":
        if (postReactions.haha.length !== 0) {
          return postReactions.haha.length;
        }
        return false;
      case "wow":
        if (postReactions.wow.length !== 0) {
          return postReactions.wow.length;
        }
        return false;
      case "sad":
        if (postReactions.sad.length !== 0) {
          return postReactions.sad.length;
        }
        return false;
      case "angry":
        if (postReactions.angry.length !== 0) {
          return postReactions.angry.length;
        }
        return false;
    }
  };

  const thirdReactionCount = () => {
    switch (sorted_reaction[2]) {
      case "like":
        if (postReactions.like.length !== 0) {
          return postReactions.like.length;
        }
        return false;

      case "love":
        if (postReactions.love.length !== 0) {
          return postReactions.love.length;
        }
        return false;

      case "care":
        if (postReactions.care.length !== 0) {
          return postReactions.care.length;
        }
        return false;

      case "haha":
        if (postReactions.haha.length !== 0) {
          return postReactions.haha.length;
        }
        return false;

      case "wow":
        if (postReactions.wow.length !== 0) {
          return postReactions.wow.length;
        }
        return false;

      case "sad":
        if (postReactions.sad.length !== 0) {
          return postReactions.sad.length;
        }
        return false;

      case "angry":
        if (postReactions.angry.length !== 0) {
          return postReactions.angry.length;
        }
        return false;
    }
  };

  const postReaction = () => {
    switch (postReacted) {
      case "like":
        return (
          <>
            <img src="/assets/images/icons/small/like-reaction.png" alt="" />
            <span className="reaction__span_text_like">Like</span>
          </>
        );
      case "love":
        return (
          <>
            <img src="/assets/images/icons/small/love-reaction.png" alt="" />
            <span className="reaction__span_text_love">Love</span>
          </>
        );
      case "care":
        return (
          <>
            <img src="/assets/images/icons/small/care-reaction.png" alt="" />
            <span className="reaction__span_text_care">Care</span>
          </>
        );
      case "haha":
        return (
          <>
            <img src="/assets/images/icons/small/haha-reaction.png" alt="" />
            <span className="reaction__span_text_haha">Haha</span>
          </>
        );
      case "wow":
        return (
          <>
            <img src="/assets/images/icons/small/wow-reaction.png" alt="" />
            <span className="reaction__span_text_wow">Wow</span>
          </>
        );
      case "sad":
        return (
          <>
            <img src="/assets/images/icons/small/sad-reaction.png" alt="" />
            <span className="reaction__span_text_sad">Sad</span>
          </>
        );
      case "angry":
        return (
          <>
            <img src="/assets/images/icons/small/angry-reaction.png" alt="" />
            <span className="reaction__span_text_angry">angry</span>
          </>
        );
      default:
        return (
          <>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="post__like_comment_share_icon"
            />
            <span className="post__like_comment_share_text">Like</span>
          </>
        );
    }
  };

  return (
    <div className="post">
      <div className="post__head">
        <div className="post__img_wrapper">
          <img src={postProfileImage} alt="" className="post__main_img" />
        </div>
        <div className="post__header_middle">
          <h6 className="post__header_middle_name">{postUsername}</h6>
          <p className="post__header_middle_timeline">
            {postTimestamp &&
              timeDifference(
                new Date(),
                new Date(postTimestamp.seconds * 1000)
              )}
          </p>
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
        <p className="post__post_content">{postText}</p>
        {postImage && <img src={postImage} alt="" className="post__post_img" />}
      </div>
      <div className="post__infos">
        <div className="post__reaction_view">
          {/* Reaction */}
          {/* First Reaction */}

          {firstReactionCount() && firstReaction()}

          {/* Second Reaction */}
          {secondReactionCount() && secondReaction()}

          {/* Third Reaction */}
          {thirdReactionCount() && thirdReaction()}

          <span className="post__reaction_view_img_reactions">
            {reaction_count() !== 0 && reaction_count()}
          </span>
        </div>
        <div className="post__comment_view" onClick={commentButtonClick}>
          Comments
        </div>
      </div>

      <div className="post__like_comment_share">
        <div className="post_like">
          {postReaction()}

          <div className="reaction-box"></div>
          <div
            className="reaction-like "
            onClick={() => reactionInsert("like")}
          >
            <img src="assets\images\icons\big\like-reaction.png" alt="" />
          </div>
          <div
            className="reaction-love "
            onClick={() => reactionInsert("love")}
          >
            <img src="assets\images\icons\big\love-reaction.png" alt="" />
          </div>
          <div
            className="reaction-care "
            onClick={() => reactionInsert("care")}
          >
            <img src="assets\images\icons\big\care-reaction.png" alt="" />
          </div>
          <div
            className="reaction-haha "
            onClick={() => reactionInsert("haha")}
          >
            <img src="assets\images\icons\big\haha-reaction.png" alt="" />
          </div>
          <div className="reaction-wow " onClick={() => reactionInsert("wow")}>
            <img src="assets\images\icons\big\wow-reaction.png" alt="" />
          </div>
          <div className="reaction-sad " onClick={() => reactionInsert("sad")}>
            <img src="assets\images\icons\big\sad-reaction.png" alt="" />
          </div>
          <div
            className="reaction-angry "
            onClick={() => reactionInsert("angry")}
          >
            <img src="assets\images\icons\big\angry-reaction.png" alt="" />
          </div>
        </div>

        <div className="post_comment" onClick={commentButtonClick}>
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

      {commentHide && (
        <>
          <PostCommentInput postId={postId} />

          {comments.map(
            ({
              commentId,
              commentProfileImage,
              commentUsername,
              commentReactions,
              commentText,
              commentTimestamp,
            }) => (
              <PostComment
                key={commentId}
                postId={postId}
                commentId={commentId}
                commentProfileImage={commentProfileImage}
                commentUsername={commentUsername}
                commentReactions={commentReactions}
                commentText={commentText}
                commentTimestamp={commentTimestamp}
              />
            )
          )}

          {/* {comments.map((e) => console.log(e))} */}
        </>
      )}
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
