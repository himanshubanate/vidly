import React from "react";

export default function Like(props) {
  return (
    <i
      onClick={props.onClick}
      style={{ color: props.liked ? "red" : "black", cursor: "pointer" }}
      className="fa fa-regular fa-heart"
    ></i>
  );
}
