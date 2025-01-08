import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 568px;
  padding-top: 100px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://www.aqvo.uz/assets/22-CgDDRMeF.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 70px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1160px;
  margin: 0 auto;
  position: relative;
  .form {
    margin-top: 0;
  }
  .content {
    background-color: inherit;
    /* position: absolute;
    top: 0;
    right: 200px; */
    margin-top: 0;
    padding-top: 0;
  }
`;

export const InfoBox = styled.div`
  width: 500px;
`;

export const Title = styled.h1`
  font-family: Oswald, Arial, sans-serif;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  line-height: 24px;
  font-family: Montserrat Alternates, Arial, sans-serif;
  padding-bottom: 15px;
`;

export const ContactTitle = styled(Subtitle)`
  padding-bottom: 5px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
