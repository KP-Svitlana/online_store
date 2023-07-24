import styled from "@emotion/styled";
import { colors, paletteGray, transition } from "../../styles/variables";

export const StyledButton = styled.button`
  width: 100%;
  border: none;
  background-color: ${colors.primary_main};
  padding: 16px 64px;
  justify-content: center;
  align-items: center;
  color: ${paletteGray.Gray_0};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color ${transition.transitionDuration} ${transition.cubicBezie};

  @media (min-width: 760px) {
    max-width: 300px;
  }
  
  :hover,
  :focus {
    background-color: ${colors.secondary_dark};
  }
`;

export const BtnAddToBasketSt =styled.button`
  width: 100%;
  border: 1px solid ${paletteGray.text};
  padding: 14px 56px;
  justify-content: center;
  align-items: center;
  color: ${paletteGray.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 1px;
  cursor: pointer;
  transition:border ${transition.transitionDuration} ${transition.cubicBezie};

  @media (min-width: 760px) {
    padding: 16px 64px;
  }

  :hover,
  :focus {
    border:1px solid ${colors.secondary_dark};
  }
`;
