import { Themes } from "@/styles/themes";
import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: 30rem;
    padding: 2.5rem;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;    

    background: ${Themes.colors.white};
`