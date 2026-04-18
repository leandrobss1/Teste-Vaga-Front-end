import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
`;

export const NewsLetter = styled.section`
  background: #2b1d4d;
  color: white;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 40px 80px;
`;

export const NewsLetterContent = styled.div`
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NewsLetterTitle = styled.h2`
  font-size: 24px;
`;

export const NewsLetterText = styled.p`
  font-size: 14px;
  opacity: 0.8;
  line-height: 1.4;
`;

export const NewsLetterForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 600px;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 0;
  padding: 10px 12px;
  border-radius: 6px;
  width: 100%;
  max-width: 233px;
  height: 42px;
  border: none;
  outline: none;

  &:focus {
    outline: 2px solid #f7c600;
  }
`;

export const Button = styled.button`
  width: 157px;
  height: 42px;
  background: #f7ca11;
  flex-shrink: 0;
  padding: 10px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.2s;
  color: #161615;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CheckboxLabel = styled.label`
  width: 100%;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin: 0;
  gap: 6px;
  opacity: 0.9;
`;

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  padding: 50px 80px;
  background: #f5f5f5;
`;

export const Brand = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BrandTitle = styled.h3`
  font-size: 20px;
`;

export const BrandText = styled.p`
  font-size: 13px;
  color: #666;
  line-height: 1.4;
`;

export const Socials = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

export const SocialItem = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 80px;
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LinkTitle = styled.h4`
  margin-bottom: 10px;
`;

export const LinkItem = styled.p`
  font-size: 13px;
  color: #666;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding: 15px;
  font-size: 13px;
  font-weight: 300;
  background: white;
  color: #3f3f40;
`;

export const Divider = styled.div`
  width: 1px;
  height: 198px;
  align-self: stretch;
  background: rgba(0, 0, 0, 0.15);
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  margin: 0px;
  gap: 10px;
`;

export const BrandImg = styled.img`
  width: 120px;
  height: auto;
`;
