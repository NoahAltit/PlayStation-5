import styled from "styled-components";

import { useContext, useEffect, useState } from "react";

import Header from "../Header/Header";

import bg from "../../assets/HomeBG.png";
import batBg from "../../assets/BatBG.jpg";
import Load from "../Loading/Load";

const GamePage = () => {
  const [games, setGames] = useState(null);
  const [backgroundImg, setBackgroundImg] = useState(`${bg}`);

  useEffect(() => {
    fetch("http://localhost:4000/games")
      .then((res) => res.json())
      .then((data) => {
        setGames(data.data);
      });
  }, []);

  if (!games) {
    return <Load />;
  }

  const toggleClass = (e) => {
    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active");
      setBackgroundImg(`${bg}`);
    } else if (!e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.toggle("active");
    }
  };

  return (
    <>
      <Section>
        <Wrapper style={{ backgroundImage: `url(${backgroundImg})` }}>
          <Header />
          <GameWrap>
            {games.map((game) => {
              return (
                <>
                  <ContentWrap key={game.id} onClick={toggleClass}>
                    <Game
                      className="game"
                      onClick={() => setBackgroundImg(`${game.bgImg}`)}
                    >
                      <Logo
                        className={game.class}
                        src={game.gameImg}
                        style={{ border: game.border }}
                      />
                    </Game>
                    <Text>{game.gameName}</Text>
                  </ContentWrap>
                </>
              );
            })}
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
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.wrapper {
    > img {
      opacity: 0.7;
    }
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.active > .game {
    width: 150px;
    height: 150px;

    &.psstore {
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

const Logo = styled.img`
  width: 120px;
  border-radius: 20px;

  &.psstore {
    width: 100px;
  }
`;

export default GamePage;
