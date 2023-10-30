import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";

const Section_01 = styled.section`
  width: 100%;
  height: 400px;
  padding: 30px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  color: ${mainColors.fontColor};
`;

const ConWrap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 45%;
  height: 250px;
  background-color: lightblue;
  &:hover {
    background-color: ${mainColors.pointColor};
  }
  /* =>자기자신을 선택할땐 &를 사용 */
`;
export const Section = () => {
  return (
    <Section_01>
      <Title>Title</Title>
      <ConWrap>
        <Con></Con>
        <Con></Con>
      </ConWrap>
    </Section_01>
  );
};
