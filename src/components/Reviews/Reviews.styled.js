import styled from '@emotion/styled';

export const AuthorReview = styled.p`
  margin-top: ${props => props.theme.space[4]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.m}px;
  > span {
    font-weight: 500;
  }
`;
