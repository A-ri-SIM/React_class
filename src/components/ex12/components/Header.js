import styled from "styled-components";
import { mainColors } from "../../../GlobalStyled";
import { Link } from "react-router-dom";

const SHeader = styled.header`
  width: 100%;
  padding: 20px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: ${mainColors.fontColor};
  }
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.h3`
  font-size: 28px;
  font-weight: 700;
`;

const MenuWrap = styled.ul`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  li {
    margin-left: 200px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>LOGO</Link>
      </Logo>
      <MenuWrap>
        <li>
          <Link to={"/sub/0"}>MENU01</Link>
        </li>
        <li>
          <Link to={"/sub/1"}>MENU02</Link>
        </li>
        <li>
          <Link to={"/sub/2"}>MENU03</Link>
        </li>
      </MenuWrap>
    </SHeader>
  );
};
