import styled from "styled-components";
import insta from "../../../assets/icons/instagram.svg?react";

export const Container = styled.div`
  width: 700px;
  height: auto;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 40px;
  text-align: center;
  line-height: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.25rem;
  .link {
    color: #fff9;
    text-decoration: none;
    font-size: 20px;
    :hover {
      transform: scale(1.1); 
      transition: all ease;
    }
  }
`;

export const Slogan = styled.p`
  font-family: Montserrat Alternates, Arial, sans-serif;
  font-size: 20px;
`;

export const LinkDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
  height: 30px;
  .link {
    width: 24px;
    height: 24px;
    font-size: 0;
  }
`;

export const Link = styled.a`
  cursor: pointer;
`;

export const Instagram = styled(insta)``;
