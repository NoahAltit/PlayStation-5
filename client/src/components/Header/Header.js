import styled from "styled-components";

import avatar from "../../assets/avatar.jpg";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

const Header = () => {
  let date = new Date();
  let minutes = date.getMinutes();
  let hour = (date.getHours() + 24) % 12 || 12;
  let ampm = hour <= 12 ? "PM" : "AM";
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let timeOfDay = `${hour}:${minutes} ${ampm}`;

  return (
    <>
      <Wrapper>
        <MainMenu>
          <NavItem className="active">Games</NavItem>
          <NavItem>Media</NavItem>
        </MainMenu>
        <SubMenu>
          <NavItem className="icon">
            <HiOutlineSearch />
          </NavItem>
          <NavItem className="icon">
            <IoMdSettings />
          </NavItem>
          <NavItem className="avatar">
            <Avatar src={avatar} />
          </NavItem>
          <NavItem className="time">{timeOfDay}</NavItem>
        </SubMenu>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const MainMenu = styled.div`
  display: flex;
`;

const SubMenu = styled(MainMenu)`
  display: flex;
  align-items: center;
`;

const NavItem = styled.p`
  cursor: pointer;
  margin: 0 20px;
  color: white;
  font-size: 20px;
  font-weight: 300;
  opacity: 0.8;

  &.active {
    font-weight: 500;
    opacity: 1;
  }

  &.icon {
    font-size: 25px;
    opacity: 1;
  }

  &.avatar,
  &.time {
    opacity: 1;
  }
`;

const Avatar = styled.img`
  width: 40px;
  border-radius: 50%;
`;

export default Header;
