import React from "react";
import VideoItem from "../basics/VideoItem";

const VideoList = (props) => {
  return (
    <div className="list clearfix">
      <ul>
        {props.videos.map((video) => (
          <VideoItem key={video.id.videoId} video={video} />
        ))}
      </ul>
    </div>
  );
};

export default VideoList;