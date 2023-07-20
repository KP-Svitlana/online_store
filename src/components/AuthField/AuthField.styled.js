import styled from "@emotion/styled";
import { paletteGray, colors } from "../../styles/variables";
import { Field } from "formik";

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
  line-height: 1.25;
  color: ${paletteGray.text};
`;

export const StyledStar = styled.sup`
  color: #da2121;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
`;
export const StyledInput = styled(Field)`
  padding: 14px 12px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${paletteGray.Gray_60};
  border: 1px solid ${paletteGray.Gray_60};

  :hover {
    color: ${paletteGray.text};
    border-color: ${paletteGray.text};
  }

  :focus {
    border: 2px solid ${colors.primary_main};
  }

  :focus-visible {
    outline: 0px solid transparent;
  }
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

  :focus-visible {
    outline: 0px solid transparent;
  }
`;
