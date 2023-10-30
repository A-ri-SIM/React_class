import { styled } from "styled-components";
const Box = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  padding: 100px;
  box-sizing: border-box;
  /* margin-bottom: 30px; */
`;

export const StyledEx01 = () => {
  return (
    <div>
      {/* <Box bgColor="darkmagenta"></Box>
      <Box bgColor="green"></Box> */}
      <Box width="500px" height="500px" bgColor="darkmagenta">
        <Box width="300px" height="300px" bgColor="green"></Box>
      </Box>
    </div>
  );
};
