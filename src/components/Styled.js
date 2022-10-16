import styled from "styled-components";

const DropFile = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  border: 2px dashed #000;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--input-bg);
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const Label = styled.label`
  text-align: center;
  color: var(--txt-second-color);
  font-weight: 600;
  padding: 10px;
`;

const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 30px;
  margin-top: 50px;
`;

export { DropFile, Input, Label, Preview };
