import styled from "styled-components";

export interface CardLabelProps {
  $color?: string;
  $bold?: boolean;
}

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;

export const MainTitle = styled.h1`
  width: 100%;
  height: 50%;
  font-size: 48px;
  font-weight: 600;
  color: white;
`;
export const MainSubTitle = styled.h2`
  width: 100%;
  height: 50%;
  font-size: 32px;
  font-weight: 500;
  margin-top: 20px;

  strong {
    color: #f7ca11;
    font-weight: 700;
  }
`;

export const TextOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: absolute;

  top: 70px;
  left: 80px;
  z-index: 2;

  color: white;
`;

export const ButtonProduct = styled.button`
  width: 206px;
  height: 50px;
  background: #f7ca11;
  color: #271c47;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  margin-top: 40px;

  cursor: pointer;

  &:hover {
    color: white;
    background: #ffd902;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 390px;
  object-fit: cover;
  display: block;
`;

export const Card = styled.div<{ $background?: string }>`
  width: 128px;
  height: 128px;

  border-radius: 10px;
  background: ${({ $background }) => $background};

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  margin: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 -11px;

  gap: 8px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const CardLabel = styled.span<CardLabelProps>`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  text-align: center;

  color: ${({ $color }) => $color};
  font-weight: ${({ $bold }) => ($bold ? 700 : 500)};
`;

export const CardImageContainer = styled.div`
  width: 61px;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
