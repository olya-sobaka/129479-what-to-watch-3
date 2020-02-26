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

export default VideoPlayer;
