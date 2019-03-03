import React from "react";
import "./Portfolio.css"
const Portfolio = props =>
  <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;

export default Portfolio;
