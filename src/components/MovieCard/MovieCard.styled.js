import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  border-bottom: ${props => props.theme.space[1]}px solid black;
`;

export const CardWrapper = styled.div`
  border: ${props => props.theme.space[1]}px solid black;
  border-radius: ${props => props.theme.space[2]}px;

  > a {
    text-decoration: none;
  }
`;
