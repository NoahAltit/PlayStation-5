import styled from "styled-components";

import { AiOutlinePlus } from "react-icons/ai";
import bg from "../../assets/HomeBG.png";
import avatar from "../../assets/avatar.jpg";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();

  return (
    <>
      <Section>
        <Wrapper>
          <TextWrap>
            <Title>Welcome Back to PlayStation</Title>
            <Subtitle>Who's using this mouse?</Subtitle>
          </TextWrap>
          <Wrap>
            <PlayersWrap>
              <AddPlayer>
                <AiOutlinePlus className="icon" />
              </AddPlayer>
              <Text>Add User</Text>
            </PlayersWrap>
            <PlayersWrap>
              <AddPlayer
                className="active"
                onClick={() => history.push("/gaming")}
              >
                <Avatar src={avatar} />
              </AddPlayer>
              <Text>Noah Altit</Text>
            </PlayersWrap>
          </Wrap>
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
  color: white;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 25px;
  font-weight: 300;
`;

const Wrap = styled.div`
  padding: 20px 0;
  display: flex;
`;

const PlayersWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  margin: 0 25px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  cursor: pointer;

  .icon {
    font-size: 50px;
  }

  &.active {
    border: 5px solid mediumaquamarine;
  }
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 30px;
  margin-top: 20px;
`;

const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export default SignIn;
