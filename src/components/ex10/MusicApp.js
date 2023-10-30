import { styled } from "styled-components";
import { mainColors } from "../../GlobalStyled";
import { Header } from "./components/Header";
import { CoverImg } from "./components/CoverImg";
import { PlayBtn } from "./components/PlayBtn";

const Wrap = styled.div`
  max-width: 390px;
  height: 800px;
  margin: 0 auto;
  background-color: ${mainColors.fontColor};
  border-radius: 20px;
  color: #fff;
  padding: 30px;
`;



export const MusicApp = () => {
  return (
    <Wrap>
      <Header/>
      <CoverImg/>
      <PlayBtn/>
    </Wrap>
  );
};
