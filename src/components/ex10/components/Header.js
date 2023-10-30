import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
`;

const MoreBtn = styled.div`
  color: ${mainColors.fontColor};

  background-color: #fff;
`;

const MenuBtn = styled.div`
  border: 1px solid #f1f1f1;
`;
export const Header = () => {
  return (
    <SHeader>
      <MoreBtn>
        <FontAwesomeIcon icon={faCaretDown} />
      </MoreBtn>
      <MenuBtn>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>
    </SHeader>
  );
};
