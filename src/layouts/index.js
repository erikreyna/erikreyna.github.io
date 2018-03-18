import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import { StyledWrapper, StyledSection } from "../styles/styled-components";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Erik Reyna" />
    <StyledWrapper>{children()}</StyledWrapper>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
