import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const Img = styled.img`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  filter: brightness(0.5);
`;
export const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  text-align: center;
`;
export const Title = styled.div`
  font-size: 86px;
  line-height: 95px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
  margin-bottom: 30px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 27px;
`;
