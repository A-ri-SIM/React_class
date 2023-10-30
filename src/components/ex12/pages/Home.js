import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainColors } from "../../../GlobalStyled";
import { data } from "../api";

const Banner = styled.section`
  height: 800px;
  background: url("https://wallpapers.com/images/hd/abstract-background-6m6cjbifu3zpfv84.jpg")
    no-repeat center / cover;
`;

const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
  a {
    width: 30%;
    height: 500px;
  }
`;

const Con = styled.div`
  height: inherit;
  background: url(${(props) => props.$bgUrl}) no-repeat center/cover;
`;

export const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Section>
        {/* <Link to={"/sub/0"}>
          <Con $bgUrl="https://www.creativefabrica.com/wp-content/uploads/2023/05/11/Modern-colourful-abstract-background-Graphics-69439498-1-580x387.jpg"></Con>
        </Link>
        <Link to={"/sub/1"}>
          <Con $bgUrl="https://thumbs.dreamstime.com/b/colorful-abstract-background-wavy-style-design-simple-stylish-suitable-promotion-web-banner-infographic-sale-other-124353642.jpg"></Con>
        </Link>
        <Link to={"/sub/2"}>
          <Con $bgUrl="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"></Con>
        </Link> */}
        {data.map((con) => (
          <Link to={`/sub/${con.id}`} key={con.id}>
            <Con $bgUrl={con.img}></Con>
          </Link>
        ))}
      </Section>
    </div>
  );
};
