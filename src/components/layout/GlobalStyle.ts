import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html,
    body,
    #__next {
        height: 100%;
        background-color: ${props => props.theme.colors.layout.darkest};
    }

    body,
    input,
    button,
    textarea {
        font-family: "Poppins", -apple-system, sans-serif;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        color: ${props => props.theme.colors.text.lightest};
    }

    body {
        scrollbar-color: rgba(0, 0, 0, .6) rgba(0, 0, 0, .3);
    }

    ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, .3);
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, .6);
        height: 10px;
    }

    ::-webkit-scrollbar-track-piece {
        height: 30px;
    }

    a {
        text-decoration: none;
        color: rgba(255, 255, 255, .8);
        transition: all .2s;
        cursor: pointer;

        &:hover {
            color: rgba(255, 255, 255, 1);
        }
    }
`;