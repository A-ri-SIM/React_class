import { styled } from "styled-components";

const ImgBox = styled.div`
  width: 250px;
  height: 250px;
  margin: 40px auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 5px 10px 5px black;
  img {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 25px;
  text-align: center;
  margin: 20px;
`;

const Singer = styled.p`
  font-size: 14px;
  text-align: center;
`;

const Box = styled.div`
  width: 100%;
  height: 5px;
  display: flex;
  margin-top: 30px;
`;

const Playbar = styled.div`
  width: 10%;
  height: 5px;
  background-color: salmon;
`;

const BaseBar = styled.div`
  width: 90%;
  height: 5px;
  background-color: #999;
`;

const TimeBox = styled.div`
    width: 100%;
    height: 5px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
`;


export const CoverImg = () => {
  return (
    <>
      <ImgBox>
        <img src="https://musicmeta-phinf.pstatic.net/album/006/958/6958691.jpg?type=r480Fll&v=20230307003448"></img>
      </ImgBox>
      <Title>That's Hilarious</Title>
      <Singer>Charlie Puth</Singer>
      <Box>
        <Playbar></Playbar>
        <BaseBar></BaseBar>
      </Box>
      <TimeBox>
        <p>00:03</p>
        <p>03:40</p>
      </TimeBox>
    </>
  );
};
