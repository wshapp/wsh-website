import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    html,
    body,
    #root {
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

    html {
        scroll-behavior: smooth;
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