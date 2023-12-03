import styled from "styled-components";
import { Themes } from "./themes";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 30rem;

    background: ${Themes.colors.green100};
`
