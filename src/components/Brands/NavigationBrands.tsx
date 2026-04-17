import * as S from "./styles";
import { navigationBrands } from "../../data/navigationBrands";

export const NavigationBrands: React.FC = () => {
  return (
    <S.BrandsContainer>
      <S.BrandsTitle>Navegue por marcas</S.BrandsTitle>

      <S.BrandsList>
        {navigationBrands.map((brand) => (
          <S.BrandItem key={brand.id}>
            <S.BrandCircle>
              <S.BrandImage src={brand.image} alt={`Marca ${brand.id}`} />
            </S.BrandCircle>
          </S.BrandItem>
        ))}
      </S.BrandsList>
    </S.BrandsContainer>
  );
};
