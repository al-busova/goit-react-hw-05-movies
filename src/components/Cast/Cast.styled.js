import styled from "@emotion/styled";

export const Container = styled.section`
padding: 8px 0;
`;

export const CastList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
`;

export const CastItem = styled.li`
padding: 4px;
width: 150px;
border: 1px solid orangered;
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
padding:8px;
> h4 {
    margin-top: 0;
   margin-bottom: 8px; 
}
> p {
    margin: 0;
}
`;

export const MovieTitle = styled.h2`
margin: 0;
font-size: ${props => props.theme.fontSizes.m}px;
`;