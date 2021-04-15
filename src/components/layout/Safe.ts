import styled from "styled-components";

export const SafeContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const SafeBackground = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.background.primary};
`;

export const SafeContent = styled.div`
    display: flex;
    width: 100%;
    background-color: ${props => props.theme.colors.background.primaryLight};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;
