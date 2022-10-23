import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MoviesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
`;

export const MovieItem = styled.li`
display: flex;
  flex-direction: column;
  justify-content: center;
padding: 8px;
height: 60px;
width: 46%;
border: 1px solid orangered;
  &:hover h2 {
    color:orangered;
  }
`;

export const Link = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;
export const MovieTitle = styled.h2`
margin: 0;
font-size: ${props => props.theme.fontSizes.m}px;
`;