import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 8px;
   border-bottom: 1px solid black;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;
