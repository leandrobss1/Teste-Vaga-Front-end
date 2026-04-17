import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoMdClose } from "react-icons/io";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import PlusButton from "../../assets/svg/PlusButton.svg?react";
import DecreaseButton from "../../assets/svg/DecreaseButton.svg?react";
import * as S from "./styles";

import "swiper/css";

import productData from "../../data/products.json";

export function ShowCase() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const items = productData.success ? productData.products : [];

  const increase = () => setQuantity((prev) => Math.min(prev + 1, 99));
  const decrease = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const formatPrice = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsModalOpen(true);
  };

  return (
    <S.ShowCaseSection>
      <S.SectionTitle>Produtos relacionados</S.SectionTitle>

      <S.CategoriesTabs>
        <S.TabItem className="active">CELULAR</S.TabItem>
        <S.TabItem>ACESSÓRIOS</S.TabItem>
        <S.TabItem>TABLETS</S.TabItem>
        <S.TabItem>NOTEBOOKS</S.TabItem>
        <S.TabItem>TVS</S.TabItem>
        <S.TabItem>VER TODOS</S.TabItem>
      </S.CategoriesTabs>

      <S.CarrouselContainerWrapper>
        <S.CarrouselContainer>
          <S.NavButton className="custom-prev">
            <MdArrowBackIos />
          </S.NavButton>

          <S.NavButton className="custom-next">
            <MdArrowForwardIos />
          </S.NavButton>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {items.map((prod, index) => (
              <SwiperSlide key={index}>
                <S.CarrouselWrapper>
                  <S.CarrouselProductCard>
                    <S.ProductImage src={prod.photo} alt={prod.productName} />
                    <S.ProductTitle>{prod.productName}</S.ProductTitle>
                    <S.PriceArea>
                      <S.OldPrice>{formatPrice(prod.price * 1.1)}</S.OldPrice>
                      <S.CurrentPrice>{formatPrice(prod.price)}</S.CurrentPrice>
                      <S.Installments>
                        ou 2x de {formatPrice(prod.price / 2)} sem juros
                      </S.Installments>
                      <S.Shipping>Frete grátis</S.Shipping>
                    </S.PriceArea>
                    <S.CarrouselBuyButton onClick={() => handleOpenModal(prod)}>
                      COMPRAR
                    </S.CarrouselBuyButton>
                  </S.CarrouselProductCard>
                </S.CarrouselWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.CarrouselContainer>
      </S.CarrouselContainerWrapper>

      {isModalOpen && selectedProduct && (
        <S.ModalOverlay onClick={() => setIsModalOpen(false)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={() => setIsModalOpen(false)}>
              <IoMdClose />
            </S.CloseButton>
            <S.ModalImage
              src={selectedProduct.photo}
              alt={selectedProduct.productName}
            />
            <S.ModalWrapperInfo>
              <S.ModalTitle>{selectedProduct.productName}</S.ModalTitle>
              <S.ModalPrice>{formatPrice(selectedProduct.price)}</S.ModalPrice>
              <S.ModalDescription>
                Many desktop publishing packages and web page <br /> editors now
                many desktop publishing
                <br />
                <strong>Veja mais detalhes do produto {">"}</strong>
              </S.ModalDescription>
              <S.QuantityContainer>
                <S.Counter>
                  <S.CounterButton onClick={decrease}>
                    <DecreaseButton />
                  </S.CounterButton>
                  <S.CounterValue>
                    {String(quantity).padStart(2, "0")}
                  </S.CounterValue>
                  <S.CounterButton onClick={increase}>
                    <PlusButton />
                  </S.CounterButton>
                </S.Counter>
                <S.BuyButton>COMPRAR</S.BuyButton>
              </S.QuantityContainer>
            </S.ModalWrapperInfo>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.ShowCaseSection>
  );
}
