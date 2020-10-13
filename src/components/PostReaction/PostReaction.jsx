import React from "react";

function PostReaction({ postReactions }) {
  const sorted_reaction = Object.keys(postReactions).sort(
    (a, b) => postReactions[b] - postReactions[a]
  );

  const firstReaction = () => {
    const reaction = sorted_reaction[0];

    switch (reaction) {
      case "like":
        return <img src="\assets\images\icons\like-reaction.png" alt="" />;
      case "love":
        return <img src="\assets\images\icons\love-reaction.png" alt="" />;
      case "care":
        return <img src="\assets\images\icons\care-reaction.png" alt="" />;
      case "haha":
        return <img src="\assets\images\icons\haha-reaction.png" alt="" />;
      case "wow":
        return <img src="\assets\images\icons\wow-reaction.png" alt="" />;
      case "sad":
        return <img src="\assets\images\icons\sad-reaction.png" alt="" />;
      case "angry":
        return <img src="\assets\images\icons\angry-reaction.png" alt="" />;
    }
  };

  const secondReaction = () => {
    const reaction = sorted_reaction[1];

    switch (reaction) {
      case "like":
        return <img src="\assets\images\icons\like-reaction.png" alt="" />;
      case "love":
        return <img src="\assets\images\icons\love-reaction.png" alt="" />;
      case "care":
        return <img src="\assets\images\icons\care-reaction.png" alt="" />;
      case "haha":
        return <img src="\assets\images\icons\haha-reaction.png" alt="" />;
      case "wow":
        return <img src="\assets\images\icons\wow-reaction.png" alt="" />;
      case "sad":
        return <img src="\assets\images\icons\sad-reaction.png" alt="" />;
      case "angry":
        return <img src="\assets\images\icons\angry-reaction.png" alt="" />;
    }
  };

  const thirdReaction = () => {
    const reaction = sorted_reaction[2];

    switch (reaction) {
      case "like":
        return <img src="\assets\images\icons\like-reaction.png" alt="" />;
      case "love":
        return <img src="\assets\images\icons\love-reaction.png" alt="" />;
      case "care":
        return <img src="\assets\images\icons\care-reaction.png" alt="" />;
      case "haha":
        return <img src="\assets\images\icons\haha-reaction.png" alt="" />;
      case "wow":
        return <img src="\assets\images\icons\wow-reaction.png" alt="" />;
      case "sad":
        return <img src="\assets\images\icons\sad-reaction.png" alt="" />;
      case "angry":
        return <img src="\assets\images\icons\angry-reaction.png" alt="" />;
    }
  };

  // console.log(" -> ", firstReaction());

  return (
    <React.Fragment>
      {firstReaction()}
      {secondReaction()}
      {thirdReaction()}
    </React.Fragment>
  );
}

export default PostReaction;
