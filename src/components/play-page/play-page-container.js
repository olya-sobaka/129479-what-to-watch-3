import {connect} from "react-redux";
import PlayPage from "./play-page";

const mapStateToProps = (state) => {

  const {videoPlayerFilmId, films} = state;

  return {
    videoPlayerFilmId,
    films,
  };
};

const PlayPageContainer = connect(mapStateToProps)(PlayPage);

export default PlayPageContainer;
