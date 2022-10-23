import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HomeTitle = styled.h1`
margin-left: 16px;
font-size: ${props => props.theme.fontSizes.xl}px;
`;

export const Container = styled.section`
  padding:  8px 0;
   border-bottom: 1px solid black;
`;
export const AddTitle = styled.h3`
margin-left: 16px;
font-size: ${props => props.theme.fontSizes.m}px;
`;

export const AddList = styled.ul`
display: flex;
flex-direction: column;
gap: 8px;
  margin-left: 24px;
`;

export const Link = styled(NavLink)`
display: flex;
align-items: center;
margin-bottom: 4px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.m}px;
   &:hover {
    color:orangered;
  }
`;