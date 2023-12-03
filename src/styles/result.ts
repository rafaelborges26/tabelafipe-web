import styled from "styled-components";
import { Themes } from "./themes";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 30rem;
    gap: 2rem;

    background: ${Themes.colors.green100};
`

export const Header = styled.header`
    display: flex;
`
