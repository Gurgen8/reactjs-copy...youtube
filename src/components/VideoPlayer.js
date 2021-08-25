import React from "react";


const Videoplayer = ({videoId }) => {
  if (!videoId) {
    return (
      <p>
        Search for a video
      </p>
    );
  }
  return (
    <div className="video-player">
      <iframe   src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="10"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
    </div>
  );
};

export default Videoplayer;