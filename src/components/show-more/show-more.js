import React from "react";
import PropTypes from "prop-types";

const ShowMore = (props) => {

  const {onShowMoreClick} = props;

  return (
    <button onClick={onShowMoreClick} className="catalog__button" type="button">Show more</button>
  );
};

ShowMore.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired
};

export default ShowMore;
