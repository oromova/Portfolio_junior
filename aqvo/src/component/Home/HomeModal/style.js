import styled, { css } from "styled-components";

const common = css`
  background-color: transparent;
  border: none;
  font-size: 16px;
  border-bottom: 1px solid white;
  margin: 8px 0px 0px;
  padding: 8px;
  height: 41px;
  outline: none;
  color: white;
  margin-right: 20px;
  &::placeholder {
    color: white;
  }
`;

export const Container = styled.div`
  position: absolute;
  padding: 10px;
  top: 50%;
  left: 50%;
  width: 521px;
  height: 421px;
  background-color: rgb(153 27 27);
  color: white;
`;

export const ModalContainer = styled.div`
  position: absolute;
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 530px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.25rem;
  border: 2px solid black;
  background-color: rgb(153, 27, 27);
  z-index: 111;
`;

export const ModalContent = styled.div`
  height: 100%;
`;

export const ModalForm = styled.form`
  display: flex;
  margin-bottom: 25px;
`;

export const ModalInput = styled.input`
  ${common}
  width: 220px;
`;

export const ModalSelect = styled.select`
  ${common}
  width: 100%;
  .option {
    color: black;
  }
`;

export const Textarea = styled.textarea`
  ${common};
  height: 120px;
  width: 466px;
  border: 1px solid white;
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const ModalButton = styled.button`
  color: white;
  width: 466px;
  background-color: rgb(230 126 34);
  border: none;
  border-radius: 0.375rem;
  height: 40px;
  padding: 8px 0px;
  font-weight: 500;
  font-size: 16px;
`;

export const ButtonContact = styled.button`
  background-color: rgb(167 136 97);
  width: 240px;
  height: 44px;
  border-radius: 30px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border: none;
  margin-right: 10px;
  font-size: 18px;
`;