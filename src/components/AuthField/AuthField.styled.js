import styled from "@emotion/styled";
import { paletteGray } from "../../styles/variables";

export const StyledInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  position: relative;
`;
export const StyledLabel = styled.label`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17.5px;
  color: ${paletteGray.Gray_100};
`;
export const StyledInput = styled.input`
  padding: 14px 12px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${paletteGray.Gray_60};
  border-color: ${paletteGray.Gray_60};
`;

export const StyledIconBtn = styled.button`
  width: 25px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 16px;
  right: 12px;
`;
