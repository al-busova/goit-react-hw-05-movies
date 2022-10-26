import styled from '@emotion/styled';

export const Container = styled.section`
  padding: ${props => props.theme.space[3]}px 0;
`;

export const CastList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  border-bottom: ${props => props.theme.space[1]}px solid black;
`;

export const CastItem = styled.li`
  padding: ${props => props.theme.space[2]}px;
  width: 150px;
  border: ${props => props.theme.space[1]}px solid orangered;
`;

export const CastImg = styled.img`
  display: block;
  height: 150px;
  margin: 0 auto;
`;
export const CastNoImag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  text-align: center;
`;
export const CastDescrItem = styled.div`
  height: 84px;
  overflow-y: auto;
  padding: ${props => props.theme.space[3]}px;
  > h4 {
    margin-top: 0;
    margin-bottom: ${props => props.theme.space[3]}px;
  }
  > p {
    margin: 0;
  }
`;

export const MovieTitle = styled.h2`
  margin: 0;
  font-size: ${props => props.theme.fontSizes.m}px;
`;
