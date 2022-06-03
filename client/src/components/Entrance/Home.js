import styled, { keyframes } from "styled-components";

import bg from "../../assets/HomeBG.png";
import logo from "../../assets/LogoPS.png";

const Home = () => {
  return (
    <>
      <Section>
        <Wrapper>
          <Text>Click the PS button on your screen.</Text>
          <Circle>
            <LogoWrap>
              <Logo src={logo} />
            </LogoWrap>
          </Circle>
        </Wrapper>
      </Section>
    </>
  );
};

const Section = styled.section`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Text = styled.p`
  color: white;
  font-weight: 300;
  font-size: 30px;
`;

let breathe = keyframes`
0% {
    box-shadow: 0 0 10px 5px white;
}
50% {
    box-shadow: 0 0 5px 2.5px white;
}
100% {
    box-shadow: 0 0 10px 5px white;
}

`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: rgba(211, 211, 211, 0.1);
  border: 2px solid white;
  animation: ${breathe} 2.5s linear infinite;
`;

const LogoWrap = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  animation: ${breathe} 2.5s linear infinite;
`;

const Logo = styled.img`
  width: 70px;
`;

export default Home;
