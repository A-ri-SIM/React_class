// import { useState } from "react";
// import { styled } from "styled-components";

import { useState } from "react";
import { styled } from "styled-components";

// const Box = styled.div`
//   width: 300px;
//   height: 300px;
//   background-color: ${(props) => props.$isColor};
// `;

// export const EventEx02 = () => {
//   const [bgColor, setBgColor] = useState("teal");

//   const onChangeColor = () => {
//     setBgColor("salmon");
//   };

//   return (
//     <div>
//       <Box onClick={onChangeColor} $isColor={bgColor}></Box>
//     </div>
//   );
// };

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.isBgColor};
`;
export const EventEx02 = () => {
  const [color, setColor] = useState("teal");
  const [num, setNum] = useState(0);

  const onColorChange = () => {
    if (num === 0) {
      setColor("orange");
      setNum(num + 1);
    } else if (num === 1) {
      setColor("teal");
      setNum(num - 1);
    }
  };

  return (
    <div>
      <Box onClick={onColorChange} isBgColor={color}></Box>
    </div>
  );
};
