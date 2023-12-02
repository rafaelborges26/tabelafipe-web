import styled from "styled-components";
import { Themes } from "./themes";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h1`

`

export const Subtitle = styled.h3`
    margin: 1.5rem 0;
`

export const Box = styled.div`
    width: 80%;
    height: 30rem;
    padding: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    background: ${Themes.colors.white};
`
