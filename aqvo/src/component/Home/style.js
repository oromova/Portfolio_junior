import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Navbar = styled.div`
  width: 1160px;
  height: 60px;
  background-color: rgb(99, 21, 25);
  border-radius: 40px;
  margin: 0 auto;
  color: white;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
`;

List.Item = styled.li`
  margin-right: 20px;
  list-style: none;
`;

List.A = styled.a``;
