import React from "react";
import ReviewsTab from "../reviews-tab/reviews-tab";
import DetailsTab from "../details-tab/details-tab";
import OverviewTab from "../overview-tab/overview-tab";

const Tabs = (props) => {

  const {onTabClick, activeTab} = props;
  const activeClassName = `movie-nav__item--active movie-nav__item`;
  const nonActiveClassName = `movie-nav__item`;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li
            onClick={() => {
              onTabClick(`overview`);
            }}
            className={activeTab === `overview` ? activeClassName : nonActiveClassName}>
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li
            onClick={() => {
              onTabClick(`details`);
            }}
            className={activeTab === `details` ? activeClassName : nonActiveClassName}>
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li
            onClick={() => {
              onTabClick(`reviews`);
            }}
            className={activeTab === `reviews` ? activeClassName : nonActiveClassName}>
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      {activeTab === `overview` && (
        <OverviewTab/>
      )}

      {activeTab === `details` && (
        <DetailsTab/>
      )}

      {activeTab === `reviews` && (
        <ReviewsTab/>
      )}

    </div>
  );
};

export default Tabs;
