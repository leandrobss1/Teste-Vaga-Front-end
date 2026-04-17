import styled from "styled-components";
import type { CardLabelProps } from "../Main/styles";

export const ShowCaseSection = styled.section`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 0;
  overflow-x: hidden;
  overflow-y: visible;
`;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  font-size: 30px;
  font-weight: 700;
  color: #3442b5;
  margin-bottom: 30px;

  &::before,
  &::after {
    content: "";
    width: 380px;
    height: 1px;
    background: #dedede;
  }
`;

export const CategoriesTabs = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #dedede;
  margin-bottom: 20px;
`;

export const CategoriesInfo = styled.span`
  display: flex;
  align-items: flex;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  color: #3f3f40;
`;

export const TabItem = styled.button`
  flex: 1;
  background: #fff;
  border: none;
  border-right: 1px solid #bdbdbd;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 400;
  color: #3b3b3b;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s;

  &:last-child {
    border-right: none;
  }

  &.active {
    color: #3442b5;
    font-weight: 700;
  }

  &:hover {
    background: #f9f9f9;
  }
`;

export const CarrouselContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-top: 2rem;
  position: relative;

  .swiper {
    width: 100%;
    overflow: hidden;
  }
`;

export const NavButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0px 16px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  cursor: pointer;

  svg {
    display: block;
    font-size: 16px;
    color: #3f3f40;
    margin-left: 1px;
  }

  &.custom-prev {
    left: -40px;
  }

  &.custom-next {
    right: -40px;
  }
`;

export const CarrouselContainerWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 0 50px;
  overflow: visible;
`;

export const CarrouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 12px;
`;

export const CarrouselProductCard = styled.div`
  width: 100%;
  width: 304px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0 0px 16px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 16px;
  text-align: start;
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  width: 14.8rem;
  height: 500px;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const ProductTitle = styled.h3`
  font-size: 15px;
  font-weight: 300;
  color: #3f3f40;
  margin: 10px 0;
  height: 45px;
  overflow: hidden;
`;

export const PriceArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
`;

export const OldPrice = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-decoration: line-through;
  color: #808080;
`;

export const CurrentPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #3f3f40;
`;

export const Installments = styled.small`
  font-size: 12px;
  font-weight: 400;
  color: #3f3f40;
`;

export const Shipping = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #3442b5;
  margin-top: 5px;
`;

export const CarrouselBuyButton = styled.button`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  margin-top: auto;
  padding: 12px;
  border: none;
  background: #3442b5;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 50px;
  border-radius: 4px;
  max-width: 770px;
  width: 90%;
  position: relative;
  display: flex;
  gap: 60px;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: transparent;
  font-size: 24px;
  color: #707070;
  cursor: pointer;
`;

export const ModalImage = styled.img`
  width: 100%;
  max-width: 247px;
  height: 192.2px;
  object-fit: contain;
  flex: 1;
`;

export const ModalWrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 328px;
  height: auto;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: #3f3f40;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const ModalPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #3f3f40;
  margin-bottom: 15px;
  padding-top: 10px;
  gap: 32px;
`;

export const ModalDescription = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: #9f9f9f;
  line-height: 1.5;
  padding-top: 20px;
  margin-bottom: 20px;
  max-width: 290px;

  strong {
    color: #3442b5;
    cursor: pointer;

    &:hover {
      color: #596bf7;
    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #271c47;
  width: 110px;
  height: 36px;
  background: #ffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 6px 10px;
  gap: 10px;
`;

export const CounterButton = styled.button<CardLabelProps>`
  width: 20.31px;
  height: 19.64px;
  border: none;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ $color }) => $color || "inherit"};
  }
`;

export const CounterValue = styled.span`
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  min-width: 24px;
  text-align: center;
`;

export const BuyButton = styled.button`
  background: #f7ca11;
  font-size: 14px;
  width: 188px;
  height: 36px;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #e5bc10;
  }
`;
