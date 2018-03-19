import styled from "styled-components";

export const StyledWrapper = styled.article`
  margin: 0 15px;
`;

export const StyledHeader = styled.header`
  max-width: 800px;
`;

export const StyledSection = styled.section`
  max-width: 800px;
  margin-bottom: 25px;
`;

export const StyledUnorderedList = styled.ul`
  list-style-type: none;
  margin-left: 0;
`;

export const StyledListItem = styled.li`
  display: inline-block;
  margin-right: 15px;
`;

export const StyledIcons = styled.section``;

export const StyledFooter = styled.footer`
  grid-row-start: 2;
  grid-row-end: 3;
`;

export const StyledLink = styled.a`
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: black;
  padding: 0 1px;
  transition: color ease 0.3s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: coral;
    z-index: -1;
    height: 2px;
  }

  &::before {
    width: 0%;
    left: 0;
    bottom: 0;
    transition: width ease 0.4s;
  }

  &::after {
    width: 100%;
    left: 0;
    bottom: 0;
    transition: all ease 0.6s;
  }

  &:hover {
    &::before {
      width: 100%;
    }

    &::after {
      left: 100%;
      width: 0%;
      transition: all ease 0.2s;
    }
  }
`;
