import styled from "styled-components";

import bg from "../../assets/HomeBG.png";

const Load = () => {
  return (
    <>
      <Section>
        <Loader></Loader>
      </Section>
    </>
  );
};

const Section = styled.section`
  width: 100vw;
  height: 100vh;
`;

const Loader = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Load;
