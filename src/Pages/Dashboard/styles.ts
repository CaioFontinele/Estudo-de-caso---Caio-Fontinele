import styled from "styled-components";

export const HeaderWrapper = styled.header`
  margin-top: -45vh;
  margin-left: 35vh;
  text-align: left;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

export const Date = styled.p`
  margin: 0;
  font-size: 1rem;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: -8rem;
    border: 3px solid green;
  }
`;

export const ContainerWrapper = styled.div`
  padding: 2rem;
  text-align: left; 
  width: 80%;
  margin-left: 31vh;
`;

export const MainTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 1rem;
`;