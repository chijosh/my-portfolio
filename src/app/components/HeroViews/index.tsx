import React from "react";
import Gooery from "../GooeryAnimation";
import PropTypes from "prop-types";
import Hero from "../Hero";

const OuterView = () => {
  return (
    <>
      <Gooery />
      <Hero />
    </>
  );
};

OuterView.propTypes = {};

export default OuterView;
