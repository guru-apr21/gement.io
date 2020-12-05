import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  color: white;
  height: 60%;
  /* justify-content: space-between; */

  @media (min-width: 320px) and (max-width: 1200px) {
    display: none;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 0px;
`;

export const ActiveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50%;
`;

export const ActiveItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ActiveIcon = styled.img`
  padding-left: 10px;
`;
