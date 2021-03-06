import React, { useEffect, useState } from "react";
import "./MiddleContent.css";

import Post from "../Post/Post";
import { ProgressBar } from "react-bootstrap";
import { firebase, db, storage, auth } from "../../firebase";
import { TextareaAutosize } from "@material-ui/core";
import { FontAwesomeIcon, faTimesCircle } from "../../fontawesome";
import { v4 as uuidv4 } from "uuid";

function MiddleContent() {
  const [posts, setPosts] = useState([]);
  const [posting, setPosting] = useState(false);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postProgress, setPostProgress] = useState(null);

  const user = auth.currentUser;

  // console.log("posts  ---> ", posts);
  // console.log("posting  ---> ", posting);
  // console.log("postProgress  ---> ", postProgress);
  // console.log("------------------------------------------------");

  useEffect(() => {
    // Load Posts

    db.collection("posts")
      // .orderBy("postTimestamp", "desc")
      .orderBy("postTimestamp", "desc")
      .onSnapshot(
        // (snapshot) => snapshot.docs.map((doc) => console.log(doc.data()))
        (snapshot) =>
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
  }, []);

  const posted = (e) => {
    e.preventDefault();

    if (postText) {
      if (!postImage) {
        // Without Image
        db.collection("posts").add({
          postProfileImage: user.photoURL,
          postUsername: user.displayName,
          postTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
          postText: postText,
          postImage: "",

          postReactions: {
            like: [],
            love: [],
            care: [],
            haha: [],
            wow: [],
            sad: [],
            angry: [],
          },
        });

        setPostText("");
      } else {
        // With Image
        if (imageFileTypeMatch(postImage.name)) {
          const file = postImage;

          const uploadTask = storage
            .ref()
            .child(`images/${uuidv4()}.${postImage.name}`)
            .put(file);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");

              setPostProgress(progress + 1);
            },
            (error) => {
              console.log(error);
              // setPostTweeting(false);
            },
            () => {
              uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
                console.log(downloadUrl);
                // setPostTweeting(false);
                // setPostInput("");
                setPostImage(null);
                setPostProgress(null);
                db.collection("posts").add({
                  postProfileImage: user.photoURL,
                  postUsername: user.displayName,
                  postTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  postText: postText,
                  postImage: downloadUrl,

                  postReactions: {
                    like: [],
                    love: [],
                    care: [],
                    haha: [],
                    wow: [],
                    sad: [],
                    angry: [],
                  },
                });
              });
            }
          );
        } else {
          console.log("Nooo");
        }
      }
    }
  };
  return (
    <div>
      <div className="">
        {/* Posting Input */}
        <div className="middleContent__posting_wrap">
          <div className="middleContent__posting_head">
            <div className="middleContent__posting_img_wrap">
              <img
                src={user && user.photoURL}
                alt=""
                className="middleContent__posting_img"
              />
            </div>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="What's on your mind?"
              className="middleContent__posting_textarea"
              onChange={(e) => setPostText(e.target.value)}
              value={postText}
            />
          </div>
          {postImage && (
            <div style={{ position: "relative" }}>
              <img
                src={window.URL.createObjectURL(postImage)}
                alt=""
                className="middleContent__posting_image"
              />
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="middleContent__posting_image_icon"
                onClick={() => setPostImage("")}
              />
            </div>
          )}

          <hr className="mb-1" />
          {postProgress && (
            <ProgressBar
              animated
              now={postProgress}
              className="middleContent__progressbar"
            />
          )}

          <div className="middleContent__posting_tool ">
            <div className="middleContent__posting_toolbar">
              <button
                className="middleContent__posting_toolbar_button"
                htmlFor="middleContent__file_input"
              >
                <label htmlFor="middleContent__file_input" className="mb-0">
                  <img
                    src="https://img.icons8.com/color/344/image.png"
                    alt=""
                    className="middleContent__posting_toolbar_img"
                  />{" "}
                  <span>Photos</span>
                </label>
              </button>

              <input
                type="file"
                className="d-none"
                id="middleContent__file_input"
                onChange={(e) => setPostImage(e.target.files[0])}
                accept="image/x-png,image/gif,image/jpeg"
              />
              <button className="middleContent__posting_toolbar_button">
                <img
                  src="https://img.icons8.com/bubbles/344/popular-man.png"
                  alt=""
                  className="middleContent__posting_toolbar_img"
                />{" "}
                <span>Tag Friends</span>{" "}
              </button>
              <button className="middleContent__posting_toolbar_button">
                <img
                  src="https://img.icons8.com/emoji/452/slightly-smiling-face.png"
                  alt=""
                  className="middleContent__posting_toolbar_img"
                />{" "}
                <span>Photos</span>{" "}
              </button>
            </div>
            <div>
              <button
                className="middleContent__posting_toolbar_submit"
                onClick={posted}
                disabled={posting ? true : !postText ? true : false}
              >
                Post
              </button>
            </div>
          </div>
        </div>
        {/*  */}

        {posts.map(
          ({
            id,
            postProfileImage,
            postUsername,
            postTimestamp,
            postText,
            postImage,
            postReactions,
          }) => (
            // <Post
            //   key={id}
            //   postId={id}
            //   postProfileImage={postProfileImage}
            //   postUsername={postUsername}
            //   postTimestamp={postTimestamp ? postTimestamp.seconds : ""}
            //   postText={postText}
            //   postImage={postImage}
            //   postReactions={postReactions}
            // />

            <Post
              key={id}
              postId={id}
              postProfileImage={postProfileImage}
              postUsername={postUsername}
              postTimestamp={postTimestamp && postTimestamp}
              postText={postText}
              postImage={postImage}
              postReactions={postReactions}
              postMainUsername={"ssakib405"}
            />
          )
        )}
        {/* {posts.map((post) => console.log(post.postReactions))} */}
      </div>
    </div>
  );
}
function imageFileTypeMatch(filename) {
  const fileType = filename.split(".").pop();
  if (fileType === "jpg" || fileType === "jpeg" || fileType === "png") {
    return true;
  }
  return false;
}
export default MiddleContent;
