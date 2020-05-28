import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player";

const PlayPage = (props) => {

  const {videoPlayerFilmId, films} = props;

  const film = films.find((item) => {
    return item.id === videoPlayerFilmId;
  });

  return (
    <>
      <div className="player">
        <VideoPlayer film={film} controls={true} muted={false}/>

        <button type="button" className="player__exit">Exit</button>
      </div>
    </>
  );
};

PlayPage.propTypes = {

  videoPlayerFilmId: PropTypes.number.isRequired,

  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        poster: PropTypes.string.isRequired,
        previewMp4: PropTypes.string.isRequired,
        previewWebm: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        genre: PropTypes.string,
        year: PropTypes.number,
      }).isRequired),
};

export default PlayPage;
