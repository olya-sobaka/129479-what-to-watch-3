import React from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const {playOnHover} = this.props;
    if (playOnHover) {
      const play = () => {
        if (this._videoRef.current) {
          this._videoRef.current.play();
        }
      };
      this._timeout = setTimeout(play, 1000);
    }
  }

  componentWillUnmount() {
    const {playOnHover} = this.props;
    if (playOnHover) {
      clearTimeout(this._timeout);
    }
  }


  render() {
    const {previewMp4, previewWebm, poster} = this.props.film;
    const {controls, muted} = this.props;

    return (
      <video
        ref={this._videoRef}
        width="100%"
        height="100%"
        className="player__video"
        muted={muted}
        poster={poster}
        controls={controls}
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
    poster: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    previewMp4: PropTypes.string.isRequired,
    previewWebm: PropTypes.string.isRequired
  }).isRequired,

  controls: PropTypes.bool.isRequired,

  muted: PropTypes.bool.isRequired,

  playOnHover: PropTypes.bool
};

export default VideoPlayer;
