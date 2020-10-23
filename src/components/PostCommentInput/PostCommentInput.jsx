import React, { useState } from "react";
import "./PostCommentInput.css";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { db, firebase } from "../../firebase";

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

  // console.log(postId);

  const handleCommentInput = (e) => {
    // console.log(e.key);
    if (commentInput) {
      if (e.key === "Enter") {
        setCommentInput("");

        db.collection("posts")
          .doc(postId)
          .collection("comments")
          .add({
            commentProfileImage: "https://via.placeholder.com/150/",
            commentUsername: "ssakib4050",
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
        <img
          src={"https://via.placeholder.com/150/"}
          alt=""
          className="post__comment_img"
        />
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
