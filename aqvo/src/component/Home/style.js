import styled from "styled-components";
// import icon from "../../assets/down.svg?react";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 1160px;
  margin: 0 auto;
`;

// NAVBAR
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: rgb(99, 21, 25);
  border-radius: 40px;
  color: white;
  margin-top: 20px;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  height: 60px;
  margin-left: 30px;
`;

List.Item = styled.li`
  margin-right: 20px;
  list-style: none;
  color: inherit;
  font-size: 18px;
`;

List.A = styled.a`
  cursor: pointer;
`;

export const Icons = styled.div``;

Icons.Logo = styled.img`
  width: 90px;
  height: 30px;
  cursor: pointer;
`;

export const ContainerLang = styled.div`
  width: 70px;
  height: 43px;
  display: flex;
  text-align: center;
`;

export const LangSelect = styled.select`
  background-color: inherit;
  color: white;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  font-family: Oswald, Arial, sans-serif;
  cursor: pointer;
  border: none;
  width: 70px;
  height: 43px;
  outline: none;
  appearance: none;
  padding: 5px 15px 5px 12px;
`;

export const LangOption = styled.option`
  text-transform: uppercase;
  font-family: Oswald, Arial, sans-serif;
  cursor: pointer;
  color: gray;
  border: none;
`;

// export const DropIcon = styled(icon)``;

export const ContainerContact = styled.div``;

// MAIN
export const Main = styled.div`
  height: 100%;
`;

Main.Box = styled.div`
  margin-top: 200px;
`;

Main.Title = styled.div`
  font-family: "Oswald", serif;
  font-size: 12vw;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
  /* width: 1160px; */
`;

Description.Subtitle = styled.p`
  max-width: 350px;
  height: 105px;
  color: rgb(255 255 255);
  line-height: 24px;
  font-size: 16px;
  align-items: center;
`;
