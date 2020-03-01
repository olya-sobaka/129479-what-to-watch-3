import React from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const play = () => {
      if (this._videoRef.current) {
        this._videoRef.current.play();
      }
    };
    this._timeout = setTimeout(play, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this._timeout);
  }


  render() {
    const {previewMp4, previewWebm, posterSrc: filmPoster} = this.props.film;

    return (
      <video
        ref={this._videoRef}
        width="280" // пока неточно
        height="175"
        className="player__video"
        muted={true}
        poster={filmPoster}
      >
        <source
          src={previewMp4}
          type="video/mp4"
        />
        <source
          src={previewWebm}
          type="video/webm"
        />
      </video>
    );
  }
}

VideoPlayer.propTypes = {

  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequiredб,
    previewMp4: PropTypes.string.isRequired,
    previewWebm: PropTypes.string.isRequired
  }).isRequired
};

export default VideoPlayer;
