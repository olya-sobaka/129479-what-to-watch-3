import React from "react";
import PropTypes from "prop-types";
import ReviewsTab from "../reviews-tab/reviews-tab";
import DetailsTab from "../details-tab/details-tab";
import OverviewTab from "../overview-tab/overview-tab";

const Tabs = (props) => {

  const {updateActiveItem, activeItem} = props;
  const activeClassName = `movie-nav__item--active movie-nav__item`;
  const nonActiveClassName = `movie-nav__item`;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li
            onClick={() => {
              updateActiveItem(`overview`);
            }}
            className={activeItem === `overview` ? activeClassName : nonActiveClassName}>
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li
            onClick={() => {
              updateActiveItem(`details`);
            }}
            className={activeItem === `details` ? activeClassName : nonActiveClassName}>
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li
            onClick={() => {
              updateActiveItem(`reviews`);
            }}
            className={activeItem === `reviews` ? activeClassName : nonActiveClassName}>
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      {activeItem === `overview` && (
        <OverviewTab/>
      )}

      {activeItem === `details` && (
        <DetailsTab/>
      )}

      {activeItem === `reviews` && (
        <ReviewsTab/>
      )}

    </div>
  );
};

Tabs.propTypes = {

  updateActiveItem: PropTypes.func.isRequired,

  activeItem: PropTypes.string.isRequired
};

export default Tabs;
