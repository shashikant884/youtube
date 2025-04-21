const VideoCart = ({ info }) => {
  if (!info || info.length === 0) return <p>Loading .....</p>;
  //   console.log(info);
  //   console.log(info[0].snippet.categoryId);

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        alt="thumbnails"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
      </ul>
      <h1>{statistics.viewCount}view</h1>
    </div>
  );
};

export default VideoCart;
