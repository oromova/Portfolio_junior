import styled from "styled-components";

export const Wrapper = styled.div`
  direction: ${(props) => (props === "image" ? "horizontal" : "ltr")};
`;

export const ImgSlide = styled.img`
  width: 300px;
  height: 300px;
  overflow-clip-margin: content-box;
  overflow: clip;
  border-radius: 20px;
  margin-top: 150px;
`;

export const ImgSlideTwo = styled(ImgSlide)`
  width: 200px;
  height: 200px;
  margin-top: 20px;
`;
