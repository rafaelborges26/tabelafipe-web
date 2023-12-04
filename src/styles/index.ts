import styled from "styled-components";
import { Themes } from "./themes";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    gap: 1rem;
`

export const Form = styled.form`
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
`

export const Title = styled.h1`
    @media(max-width: ${Themes.breakPoints.ipad}) {
        font-size: 1.25rem;
    }
`

export const Subtitle = styled.h3`
    @media(max-width: ${Themes.breakPoints.ipad}) {
        font-size: 1rem;
    }
`