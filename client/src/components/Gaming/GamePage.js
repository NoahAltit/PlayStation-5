import styled from "styled-components";

import Header from "../Header/Header";

import bg from "../../assets/HomeBG.png";
import store from "../../assets/psstore.png";
import gta from "../../assets/Games/gta.jpeg";
import rleague from "../../assets/Games/rleague.jpg";
import bat from "../../assets/Games/batman.jpg";
import fort from "../../assets/Games/fort.jpg";
import playroom from "../../assets/Games/playroom.jpg";

const GamePage = () => {
  const toggleClass = (e) => {
    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active");
    } else if (!e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.toggle("active");
    }
  };

  return (
    <>
      <Section>
        <Wrapper>
          <Header />
          <GameWrap>
            <ContentWrap className="active" onClick={toggleClass}>
              <Game className="game">
                <PStore src={store} className="psstore" />
              </Game>
              <Text className="text">PS Store</Text>
            </ContentWrap>
            <ContentWrap onClick={toggleClass}>
              <Game className="game">
                <Logo src={gta} className="gta" />
              </Game>
              <Text>GTA V</Text>
            </ContentWrap>
            <ContentWrap onClick={toggleClass}>
              <Game className="game">
                <Logo src={rleague} className="rleague" />
              </Game>
              <Text>Rocket League</Text>
            </ContentWrap>
            <ContentWrap onClick={toggleClass}>
              <Game className="game">
                <Logo src={bat} className="batman" />
              </Game>
              <Text>Batman</Text>
            </ContentWrap>
            <ContentWrap onClick={toggleClass}>
              <Game className="game">
                <Logo src={fort} className="fort" />
              </Game>
              <Text>Fornite</Text>
            </ContentWrap>
            <ContentWrap onClick={toggleClass}>
              <Game className="game">
                <Logo src={playroom} className="play" />
              </Game>
              <Text>Playroom</Text>
            </ContentWrap>
          </GameWrap>
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
  align-items: center;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.active > .game {
    width: 150px;
    height: 150px;

    .psstore {
      width: 100px;
    }

    img {
      width: 150px;
    }
  }

  &.active {
    p {
      display: contents;
    }
  }
`;

const GameWrap = styled.div`
  display: flex;
  height: 250px;
  justify-content: center;
  align-items: center;
`;

const Game = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 120px;
  height: 120px;
  border-radius: 20px;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  cursor: pointer;
`;

const Text = styled.p`
  color: white;
  font-weight: 300;
  font-size: 30px;
  display: none;
  transition: all 0.3s ease-in-out;
`;

const PStore = styled.img`
  width: 55px;
`;

const Logo = styled.img`
  width: 120px;
  border-radius: 20px;

  &.gta {
    border: 2px solid greenyellow;
  }

  &.rleague {
    border: 2px solid lightskyblue;
  }

  &.batman {
    border: 2px solid lavenderblush;
  }

  &.fort {
    border: 2px solid purple;
  }

  &.play {
    border: 2px solid blue;
  }
`;

export default GamePage;
