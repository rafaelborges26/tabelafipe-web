import styled from "styled-components";
import { Themes } from "./themes";

export const Container = styled.div`
    width: 100%;
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
    text-align: center;

    background: ${Themes.colors.green100};
`

export const Header = styled.header`
    display: flex;
    text-align: center;
`
