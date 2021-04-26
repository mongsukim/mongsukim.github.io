import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ReferInfo({ id, title, desc, category, property, version }) {
  return (
    <li>
      <Link
        to={{
          pathname: "/reference-detail",
          state: { id, title, desc, category, property, version },
        }}
      >
        <span className="alpha">{id}</span>
        <span className="attr">{title}</span>
        <span className="desc">{desc.slice(0, 180)}</span>
      </Link>
    </li>
  );
}

ReferInfo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ReferInfo;