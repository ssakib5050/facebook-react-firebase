import React from "react";
import "./MiddleContent.css";

import Post from "../Post/Post";

function MiddleContent() {
  return (
    <div>
      <div className="">
        <Post
          key="123"
          postId="123"
          postProfileImage="https://via.placeholder.com/150"
          postName="Rajib Khan"
          timestamp="12"
          postText="Hello World"
          postImage="https://via.placeholder.com/720x480"
          postReaction={{
            like: 5,
            love: 10,
            care: 0,
            haha: 100,
            wow: 0,
            sad: 0,
            angry: 20,
          }}
          postComments={1}
        />
      </div>
    </div>
  );
}

export default MiddleContent;
