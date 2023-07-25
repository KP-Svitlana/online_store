import styled from "@emotion/styled";
import { device } from "../../styles/mediaVeriables";

export const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;

  @media ${device.tabletOnly} {
    padding: 0 32px;
  }

  @media ${device.desktop} {
    padding: 0;
  }
`;
