import styled from "styled-components";

export const StyledWrapper = styled.article`
  margin: 0 15px;
`;

export const StyledHeader = styled.header`
  max-width: 800px;
`;

export const StyledSection = styled.section`
  max-width: 800px;
`;

export const StyledUnorderedList = styled.ul`
  list-style-type: none;
`;

export const StyledListItem = styled.li`
  &:before {
    content: "⚡";
    position: relative;
    top: 2px;
  }
`;
