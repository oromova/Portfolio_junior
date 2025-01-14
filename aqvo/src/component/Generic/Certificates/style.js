import styled from "styled-components";
import bgImg from "../../../assets/bg_certificate.jpg";

export const Container = styled.div`
  width: 100%;
  height: 640px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  padding-top: 128px;
  margin-bottom: 80px;
  margin: 0 auto;
  width: 1160px;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  font-family: Oswald, Arial, sans-serif;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const CertificatesDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Certificate = styled.img`
  width: 275px;
  height: 389px;
`;
