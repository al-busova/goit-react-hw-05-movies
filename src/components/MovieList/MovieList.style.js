import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  border-bottom: ${props => props.theme.space[1]}px solid black;
`;

export const MovieItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => props.theme.space[3]}px;
  height: 60px;
  width: 46%;
  border: ${props => props.theme.space[1]}px solid orangered;
  &:hover h2 {
    color: ${props => props.theme.colors.accent};
  }
`;

export const Link = styled(NavLink)`
  border-radius: ${props => props.theme.space[2]}px;
  text-decoration: none;
  color: ${props => props.theme.colors.main};
  font-weight: 500;
`;
export const MovieTitle = styled.h2`
  margin: 0;
  font-size: ${props => props.theme.fontSizes.m}px;
`;
