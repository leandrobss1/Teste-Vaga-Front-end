import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
`;

export const TopBarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  height: 32px;
  padding: 6px 258px;
  font-size: 12px;
  color: #4b5563;
`;

export const TextTopBarHeader = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 764px;
  height: 20px;
  color: #9f9f9f;

  strong {
    padding: 4px;
    color: #3019b2;
  }

  img {
    width: 20px;
    height: 20px;
    margin: 3px;
  }
`;

export const TopBarRight = styled.div`
  display: flex;
  gap: 24px;
`;

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  height: 72px;
  padding: 16px 24px;
  color: white;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  font-size: 30px;
  font-weight: 600;
`;

export const LogoCircle = styled.div`
  width: 41.3px;
  height: 41.3px;
  border-radius: 50%;
  background: #f7ca11;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

export const LogoTitle = styled.p`
  margin-left: -3px;
  color: #271c47;
`;

export const SearchContainerHeader = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 0 24px;
`;

export const SearchBoxHeader = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 8px 16px;
  background: #f6f5f2;
`;

export const Input = styled.input`
  flex: 1;
  background-color: #f6f5f2;
  outline: none;
  border: none;
  font-size: 14px;

  img {
    width: 28px;
    height: 28px;
  }

  &::placeholder {
    font-weight: 600;
    color: #9f9f9f;
  }
`;

export const InputButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
`;

export const IconsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  color: #4b5563;

  svg {
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: black;
    }
  }
`;

export const IconButton = styled.button`
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  background: none;
`;

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1280px;
  height: 40px;
  font-weight: 600;
  font-size: 12px;
  gap: 91px;
  padding: 12px 24px;
  color: #9f9f9f;

  box-shadow:
    -8px 0 10px -10px #3930131f,
    8px 0 10px -10px #3930131f;
`;

export const NavItemHeader = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 12px;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 20px;
    height: 20px;
    transition: 0.2s;
  }

  &:hover img {
    transform: scale(1.1);
  }

  strong {
    font-weight: 600;
    color: #3019b2;
  }
`;
