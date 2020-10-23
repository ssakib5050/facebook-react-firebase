import React from "react";
import "./RegisterSetup.css";

import { db, auth, storage } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

function RegisterSetup() {
  const [registerProfileName, setRegisterProfileName] = React.useState("");
  const [registerProfileImage, setRegisterImage] = React.useState(null);

  // console.log(registerProfileName, registerProfileImage);

  const handleContinue = () => {
    var user = auth.currentUser;
    console.log(user);

    //
    if (registerProfileName && imageFileTypeMatch(registerProfileImage.name)) {
      // setLoadSubmitButton(true);

      const file = registerProfileImage;
      const uploadTask = storage
        .ref()

        .child(`images/${uuidv4()}.${registerProfileImage.name}`)
        .put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          // setSingupSetup("Sorry Something Went Wrong");
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
            // console.log(fullName);

            user
              .updateProfile({
                displayName: registerProfileName,
                photoURL: downloadUrl,
              })
              .then(function () {
                // Update successful.
                window.location.replace("/");
              })
              .catch(function (error) {
                // An error happened.
                // singupSetup("Sorry Something went wrong");
              });
          });
        }
      );
      //
    } else {
      // setSingupSetup("Sorry Something went wrong");
    }
    //

    // user
    //   .updateProfile({
    //     displayName: "Jane Q. User",
    //     photoURL: "https://example.com/jane-q-user/profile.jpg",
    //   })
    //   .then(function () {
    //     // Update successful.
    //     console.log("DOnes");
    //   })
    //   .catch(function (error) {
    //     // An error happened.
    //   });
  };
  return (
    <div className="login__wrap ">
      <div className="login__header ">
        <div className="login__brand">
          <h2 className="login__brand_text">Facebook</h2>
        </div>
      </div>

      <div className="login__main">
        <div className="login__register_form">
          <div className="login__register_form_step">
            <h2 className="login__register_form_h2">Next Step</h2>

            <input
              type="text"
              className="form-control mb-2"
              placeholder="Full Name"
              onChange={(e) => setRegisterProfileName(e.target.value)}
              value={registerProfileName}
            />

            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="customFile"
                accept="image/x-png,image/gif,image/jpeg"
                onChange={(e) => setRegisterImage(e.target.files[0])}
              />
              <label class="custom-file-label" for="customFile">
                {registerProfileImage
                  ? registerProfileImage.name
                  : "Choose file"}
              </label>
            </div>

            {/* {error && (
              <div className="error text-danger">{<p>{error}</p> }</div>
            )} */}

            <input
              type="submit"
              value="Continue"
              className="login__submit mt-2"
              onClick={() => handleContinue()}
            />
          </div>
        </div>
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

export default RegisterSetup;
