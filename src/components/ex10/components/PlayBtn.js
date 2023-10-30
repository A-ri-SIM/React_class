import {
  faBackward,
  faForward,
  faForwardStep,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";

const PlayBox = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled.div`
  width: 50px;
  height: 50px;
  background-color: salmon;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 50px;
  color: ${mainColors.fontColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Img = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("https://media.istockphoto.com/id/1248542684/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=6aJX8oyUBsSBZFQUCJDP7KZ1y4vrf-wEH_SJsuq7B5I=");
  background-size: cover;
  border-radius: 50%;
`;

const P = styled.p`
  font-size: 14px;
`;

const ForwardStep = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #D8D8D8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayBtn = () => {
  return (
    <>
      <PlayBox>
        <FontAwesomeIcon icon={faShuffle} />
        <FontAwesomeIcon icon={faBackward} />
        <Btn>
          <FontAwesomeIcon icon={faPause} />
        </Btn>
        <FontAwesomeIcon icon={faForward} />
        <FontAwesomeIcon icon={faRepeat} />
      </PlayBox>
      <BottomBox>
        <Img></Img>
        <P>patiname</P>
        <ForwardStep>
          <FontAwesomeIcon icon={faForwardStep} />
        </ForwardStep>
      </BottomBox>
    </>
  );
};
