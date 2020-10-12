import React from "react";
import "./MainContent.css";

import LeftSidebar from "../LeftSidebar/LeftSidebar";
import MiddleContent from "../MiddleContent/MiddleContent";
import RightSidebar from "../RightSidebar/RightSidebar";

function MainContent() {
  return (
    <div className="dev">
      <div className="container mainContent_wrap dev">
        <div className="row">
          <div className="col-lg-3 col-3 d-none d-lg-block">
            <LeftSidebar />
          </div>
          <div className="col-lg-6 col-12">
            <MiddleContent />
          </div>
          <div className="col-lg-3 col-3  d-none d-lg-block">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
