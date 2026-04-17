import * as S from "./styles";
import Crown from "../../assets/svg/CrownSimple.svg";
import MagnifyingGlass from "../../assets/svg/MagnifyingGlass.svg";
import Vector from "../../assets/svg/Vector.svg";
import ShoppingCart from "../../assets/svg/ShoppingCart.svg";
import UserCircle from "../../assets/svg/UserCircle.svg";
import Heart from "../../assets/svg/Heart.svg";
import CreditCard from "../../assets/svg/CreditCard.svg";
import ShieldCheck from "../../assets/svg/ShieldCheck.svg";
import Truck from "../../assets/svg/Truck.svg";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <S.TopBarHeader>
        <S.TextTopBarHeader>
          <img src={ShieldCheck} />
          Compra <strong>100% segura</strong>
        </S.TextTopBarHeader>
        <S.TextTopBarHeader>
          <img src={Truck} />
          <strong>Frete grátis</strong> acima de R$ 200
        </S.TextTopBarHeader>
        <S.TextTopBarHeader>
          <img src={CreditCard} />
          <strong>Parcele</strong> suas compras
        </S.TextTopBarHeader>
      </S.TopBarHeader>

      <S.MainHeader>
        <S.Logo>
          <S.LogoCircle>ec</S.LogoCircle>
          <S.LogoTitle>onverse</S.LogoTitle>
        </S.Logo>

        <S.SearchContainerHeader>
          <S.SearchBoxHeader>
            <S.Input placeholder="O que você está buscando?" />
            <S.InputButton>
              <img src={MagnifyingGlass} alt="Lupa-icon" />
            </S.InputButton>
          </S.SearchBoxHeader>
        </S.SearchContainerHeader>

        <S.IconsHeader>
          <S.IconButton>
            <img src={Vector} />
          </S.IconButton>
          <S.IconButton>
            <img src={Heart} />
          </S.IconButton>
          <S.IconButton>
            <img src={UserCircle} />
          </S.IconButton>
          <S.IconButton>
            <img src={ShoppingCart} />
          </S.IconButton>
        </S.IconsHeader>
      </S.MainHeader>

      <S.NavHeader>
        <S.NavItemHeader>TODAS CATEGORIAS</S.NavItemHeader>
        <S.NavItemHeader>SUPERMERCADO</S.NavItemHeader>
        <S.NavItemHeader>LIVROS</S.NavItemHeader>
        <S.NavItemHeader>MODA</S.NavItemHeader>
        <S.NavItemHeader>LANÇAMENTOS</S.NavItemHeader>
        <S.NavItemHeader>
          <strong>OFERTAS DO DIA</strong>
        </S.NavItemHeader>

        <S.NavItemHeader>
          <img src={Crown} alt="Coroa-Icon" />
          ASSINATURA
        </S.NavItemHeader>
      </S.NavHeader>
    </S.Header>
  );
};

export default Header;
