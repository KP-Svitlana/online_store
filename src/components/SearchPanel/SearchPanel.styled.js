import styled from "@emotion/styled";


export const SearchPanelWrap = styled.div`
    display: flex;
    @media (max-width: 768px) {
        position: absolute;
        right: 165px;
        top: 28px;
    }
`;
export const SearchPanelInput = styled.input`
    border: none;
    @media (max-width: 768px) {
        width: 0;
    }

`;



