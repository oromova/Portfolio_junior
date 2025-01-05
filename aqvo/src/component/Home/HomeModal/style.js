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

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 111;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  margin: 0 auto;
  margin-top: 200px;
  height: 500px;
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 530px;
  border-radius: 0.25rem;
  border: 2px solid black;
  background-color: rgb(153, 27, 27);
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
