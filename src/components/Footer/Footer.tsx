import * as S from "./styles";
import { navigationBrands } from "../../data/navigationBrands";

export const Footer: React.FC = () => {
  const brand = navigationBrands[0];

  return (
    <S.FooterContainer>
      <S.NewsLetter>
        <S.NewsLetterContent>
          <S.NewsLetterTitle>Inscreva-se na nossa newsletter</S.NewsLetterTitle>
          <S.NewsLetterText>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </S.NewsLetterText>
        </S.NewsLetterContent>

        <S.NewsLetterForm>
          <S.InputGroup>
            <S.Input type="text" placeholder="Digite seu nome" />
            <S.Input type="email" placeholder="Digite seu e-mail" />
            <S.Button>INSCREVER</S.Button>
          </S.InputGroup>

          <S.CheckboxLabel>
            <input type="checkbox" />
            Aceito os termos e condições
          </S.CheckboxLabel>
        </S.NewsLetterForm>
      </S.NewsLetter>

      <S.FooterMain>
        <S.Brand>
          <S.BrandImg src={brand.image} />

          <S.BrandText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </S.BrandText>

          <S.Socials>
            <S.SocialItem>IG</S.SocialItem>
            <S.SocialItem>FB</S.SocialItem>
            <S.SocialItem>IN</S.SocialItem>
          </S.Socials>
        </S.Brand>

        <S.Divider />

        <S.Links>
          <S.LinkGroup>
            <S.LinkTitle>Institucional</S.LinkTitle>
            <S.LinkItem>Sobre Nós</S.LinkItem>
            <S.LinkItem>Movimento</S.LinkItem>
            <S.LinkItem>Trabalhe conosco</S.LinkItem>
          </S.LinkGroup>

          <S.LinkGroup>
            <S.LinkTitle>Ajuda</S.LinkTitle>
            <S.LinkItem>Suporte</S.LinkItem>
            <S.LinkItem>Fale Conosco</S.LinkItem>
            <S.LinkItem>Perguntas Frequentes</S.LinkItem>
          </S.LinkGroup>

          <S.LinkGroup>
            <S.LinkTitle>Termos</S.LinkTitle>
            <S.LinkItem>Termos e Condições</S.LinkItem>
            <S.LinkItem>Política de Privacidade</S.LinkItem>
            <S.LinkItem>Troca e Devolução</S.LinkItem>
          </S.LinkGroup>
        </S.Links>
      </S.FooterMain>

      <S.FooterBottom>
        © {new Date().getFullYear()} LeandroBorgesDev — Todos os direitos
        reservados.
      </S.FooterBottom>
    </S.FooterContainer>
  );
};

export default Footer;
