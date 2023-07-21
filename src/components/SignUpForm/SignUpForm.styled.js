import styled from "@emotion/styled";
import { paletteGray } from "../../styles/variables";
import { Field } from "formik";
import { device } from "../../styles/mediaVeriables";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 32px;
`;

export const StyledInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  color: ${paletteGray.text};
`;

export const StyledChekbox = styled(Field)`
  width: 16px;
  height: 16px;

  :focus-visible {
    outline: 0px solid transparent;
  }
`;

export const StyledChekboxWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justifu-content: center;
`;

export const StyledBtnWrap = styled.div`
  margin: 0 auto;
  margin-top: 12px;
`;
