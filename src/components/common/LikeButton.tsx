import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  let classes = "transition duration-500 fa-heart fa";
  classes += liked ? "s text-red-500" : "r text-gray-400";

  return <i className={classes} onClick={() => setLiked(!liked)} />;
}
