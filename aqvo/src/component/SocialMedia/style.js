import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 119px;
  padding-top: 70px;
  padding-bottom: 70px;
  width: 1160px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  max-width: 440px;
  position: relative;
  .logo {
    width: 200px;
    height: 67px;
    position: absolute;
    top: 50px;
    left: 320px;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-size: 32px;
`;

export const LinkButton = styled.button`
  display: block;
  width: 260px;
  height: 55px;
  margin: 20px;
  font-size: 14px;
  background-color: inherit;
  color: inherit;
  border: 1px solid white;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: rgb(100, 19, 23);
    transition: all 0.5s;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;
