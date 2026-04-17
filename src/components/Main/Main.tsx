import * as S from "./styles";
import BgHeader from '../../assets/img/img-blackfriday.jpg';

export default function Main() {
    return (
        
        <S.MainContainer>
            <S.ImageWrapper>
                <S.MainImage src={BgHeader} alt='background-main'/>
                    <S.TextOverlay>
                    <S.MainTitle>Venha conhecer nossas promoções</S.MainTitle>
                    </S.TextOverlay>
            </S.ImageWrapper>
        </S.MainContainer>
        
    )
};