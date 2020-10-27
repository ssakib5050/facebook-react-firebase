import React from "react";
import "./LeftSidebar.css";

function LeftSidebar() {
  return (
    <div>
      <div className="left-sidebar ">
        <TopMenu name="Rajib Khan" />

        <div className="left-sidebar-menu-wrap">
          <Menu image="newsfeed" name="News Feed" />
          <Menu image="messenger" name="Messenger" />
          <Menu image="play" name="Watch" />

          <Title title="Shortcuts" />

          <Menu image="groups" name="Group 1" />
          <Menu image="groups" name="Group 2" />
          <Menu image="groups" name="Group 3" />
          <Menu image="groups" name="Group 4" />
          <Menu image="groups" name="Group 5" />
          <Menu image="groups" name="Group 6" />
          <Menu image="groups" name="Group 7" />
          <Menu image="groups" name="Group 8" />
          <Menu image="groups" name="Group 9" />
          <Menu image="groups" name="Group 10" />

          <Title title="Explore" />

          <Menu image="covid" name="COVID-19" />
          <Menu image="pages" name="Pages" />
          <Menu image="saved" name="Saved" />
          <Menu image="groups" name="Groups" />
          <Menu image="friendlist" name="Friend List" />
          <Menu image="memories" name="Memories" />
          <Menu image="games" name="Games" />
          <Menu image="weather" name="Weather" />
          <Menu image="live" name="Live Videos" />
          <Menu image="activity" name="Recent ad Activity" />
          <Menu image="offers" name="Offers" />
          <Menu image="crisis-response" name="Crisis Response" />
          <Menu image="manage-apps" name="Manage Apps" />
          {/*<Menu image="jobs" name="Jobs" />*/}

        </div>
      </div>
    </div>
  );
}

function TopMenu({ name }) {
  return (
    <div className="left-sidebar-top">
      <img
        src="https://via.placeholder.com/150/"
        alt=""
        className="left-sidebar-top-img img-fluid"
      />
      <span className="left-sidebar-top-name">{name}</span>
    </div>
  );
}

function Menu({ image, name }) {
  return (
    <div className="left-sidebar-menu">
      <img
        src={`/assets/images/sidemenu-icons/${image}.png`}
        alt=""
        className="left-sidebar-menu-img"
      />
      <span className="left-sidebar-menu-name">{name}</span>
    </div>
  );
}

function Title({ title }) {
  return <h2 className="left-sidebar-menu-title">{title}</h2>;
}

export default LeftSidebar;
