import React, { useState } from "react";
import "./PostCommentInput.css";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { db, firebase, auth } from "../../firebase";

function PostCommentInput({
  commentId,
  postId,
  commentProfileImage,
  commentUsername,
  commentReactions,
  commentText,
  commentTimestamp,
}) {
  const [commentInput, setCommentInput] = useState("");
  const userPhoto = auth.currentUser.photoURL;

  const handleCommentInput = (e) => {
    // console.log(e.key);
    if (commentInput.length > 2) {
      if (e.key === "Enter") {
        setCommentInput("");

        db.collection("posts")
          .doc(postId)
          .collection("comments")
          .add({
            commentProfileImage: userPhoto,
            commentUsername: "",
            commentText: commentInput,
            commentTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
            commentReactions: {
              like: [],
              love: [],
              care: [],
              haha: [],
              wow: [],
              sad: [],
              angry: [],
            },
          });
      }
    }
  };
  return (
    <div className="post__comment_input ">
      <div className="post__comment_img_wrap">
        <img src={userPhoto} alt="" className="post__comment_img" />
      </div>
      <div className="post__comment_wrap_container">
        <form action="">
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Write a comment...."
            className="post__comment_wrap_input"
            onChange={(e) => setCommentInput(e.target.value)}
            // onKeyPress={handleCommentInput}
            onKeyUp={handleCommentInput}
            value={commentInput}
          />
        </form>
      </div>
    </div>
  );
}

export default PostCommentInput;
