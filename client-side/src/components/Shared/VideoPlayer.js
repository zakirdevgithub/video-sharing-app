import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => (
  <div>
    <ReactPlayer url={url} height="auto" width="500px" controls={true} />
  </div>
);

export default VideoPlayer;