import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/contents";
import VideoCart from "./VideoCart";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
    // console.log(json);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCart key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
