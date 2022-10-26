import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeTitle = styled.h1`
  margin-left: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes.xl}px;
`;

export const Container = styled.section`
  padding: ${props => props.theme.space[3]}px 0;
  border-bottom: ${props => props.theme.space[1]}px solid
    ${props => props.theme.colors.main};
`;
export const AddTitle = styled.h3`
  margin-left: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes.m}px;
`;

export const AddList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[3]}px;
  margin-left: ${props => props.theme.space[4]}px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.space[2]}px;
  border-radius: ${props => props.theme.space[2]}px;
  text-decoration: none;
  color: ${props => props.theme.colors.main};
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.m}px;
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;
