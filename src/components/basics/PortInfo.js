import React from "react";
import PropTypes from "prop-types";

function PropInfo({ link, image, title, category }) {
  return (
    <div className="port__item">
      <figure className="port__item__img">
        <a href={link}>
          <img src={image} alt={title} />
        </a>
      </figure>
      <div className="port__item__txt">
        <h2>{title}</h2>
        <p>{category}</p>
      </div>
    </div>
  );
}

PropInfo.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default PropInfo;