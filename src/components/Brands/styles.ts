import styled from "styled-components";

export const BrandsContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 288px;
  padding-bottom: 2rem;

  margin: 2rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const BrandsTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #3442b5;
  text-align: center;
`;

export const BrandsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 42px;
  flex-wrap: wrap;
`;

export const BrandItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BrandCircle = styled.div`
  width: 211px;
  height: 211px;

  border-radius: 50%;
  box-shadow: 0px 7px 20px 0px #00000021;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BrandImage = styled.img`
  width: 117px;
  height: 34.76px;
  object-fit: contain;
`;
