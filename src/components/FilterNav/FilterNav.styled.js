import styled from "@emotion/styled";

export const FilterNavWrap = styled.nav`
    display: flex;
    color: #121412;
    ul {
        display: flex;
        gap: 20px;
        list-style-type: none;
    }
    a {
        text-decoration: none;
        color: inherit;
        
    }
    a:hover{
        padding-bottom: 5px;
        border-bottom: 2px dashed #121412;
    }
`;