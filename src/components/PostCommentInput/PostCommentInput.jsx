import React, { useState } from "react";
import "./PostCommentInput.css";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";

function PostCommentInput() {
  const [commentInput, setCommentInput] = useState("");

  const handleCommentInput = (e) => {
    console.log(e.key);
    if (commentInput) {
      if (e.key === "Enter") {
        setCommentInput("");
      }
    }
  };
  return (
    <div className="post__comment_input ">
      <div className="post__comment_img_wrap">
        <img
          src="https://via.placeholder.com/150/"
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
