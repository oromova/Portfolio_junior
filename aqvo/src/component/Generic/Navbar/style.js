import styled from "styled-components";

export const Container = styled.div`
`
// NAVBAR
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1160px;
  height: 60px;
  background-color: #441118a1;
  border-radius: 40px;
  color: white;
  margin-top: 20px;
  position: fixed;
  z-index: 111;
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
  .link{
    color: inherit;
    text-decoration: none;
  }
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