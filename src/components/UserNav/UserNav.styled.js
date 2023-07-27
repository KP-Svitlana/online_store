import styled from "@emotion/styled";

export const UserNavWrap = styled.div`
    display: flex;
    margin: 0 5px;
`;

export const UserNavUl = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;

`;

export const UserNavLi = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserNavSpan = styled.span`
    @media (max-width: 768px) {
        display: none;
    }
`;