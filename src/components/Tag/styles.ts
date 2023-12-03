import { Themes } from "@/styles/themes";
import styled, { css } from "styled-components";
import { ITagStyles } from './interfaces'

export const TagContainer = styled.span<ITagStyles>`
    padding: 0.5rem;
    border-radius: 1.5rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${Themes.colors.white};

    ${props => props.type === 'success' && css`
        background: ${Themes.colors.green600};
        border: 1px solid ${Themes.colors.green900};
    `
    }

    ${props => props.type === 'error' && css`
        background: ${Themes.colors.red300};
        border: 1px solid ${Themes.colors.red600};
    `
    }
`