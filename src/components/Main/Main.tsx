import * as S from "./styles";
import BgHeader from "../../assets/img/blackfriday-img.jpg";
import Tech from "../../assets/img/tech-img.png";
import SuperMarket from "../../assets/img/supermarket-img.png";
import Drink from "../../assets/img/drink-img.png";
import Tools from "../../assets/img/tool-img.png";
import SelfCare from "../../assets/img/selfcare-img.png";
import Running from "../../assets/img/running-img.png";
import Fashion from "../../assets/img/fashion-img.png";

import ServiceCard from "./ServiceCard";

export const Main: React.FC = () => {
  return (
    <S.MainContainer>
      <S.ImageWrapper>
        <S.MainImage src={BgHeader} alt="background-main" />
        <S.TextOverlay>
          <S.MainTitle>
            Venha conhecer nossas
            <br />
            promoções
          </S.MainTitle>

          <S.MainSubTitle>
            <strong>50% Off</strong> nos produtos{" "}
          </S.MainSubTitle>

          <S.ButtonProduct>Ver produto</S.ButtonProduct>
        </S.TextOverlay>
      </S.ImageWrapper>

      <S.CardsWrapper>
        <ServiceCard
          svg={<img src={Tech} alt="Tecnologia" />}
          title="Tecnologia"
          titleColor="#3019B2"
          bold
        />
        <ServiceCard
          svg={<img src={SuperMarket} alt="Supermercado" />}
          background="#F4F4F4"
          title="Supermercado"
        />
        <ServiceCard
          svg={<img src={Drink} alt="Bebidas" />}
          background="#F4F4F4"
          title="Bebidas"
        />
        <ServiceCard
          svg={<img src={Tools} alt="Ferramentas" />}
          background="#F4F4F4"
          title="Ferramentas"
        />
        <ServiceCard
          svg={<img src={SelfCare} alt="Saúde" />}
          background="#F4F4F4"
          title="Saúde"
        />
        <ServiceCard
          svg={<img src={Running} alt="Esportes e Fitness'" />}
          background="#F4F4F4"
          title="Esportes e Fitness"
        />
        <ServiceCard
          svg={<img src={Fashion} alt="Moda" />}
          background="#F4F4F4"
          title="Moda"
        />
      </S.CardsWrapper>
    </S.MainContainer>
  );
};

export default Main;
