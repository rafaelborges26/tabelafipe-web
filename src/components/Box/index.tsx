import { IBox } from './interfaces'
import { Container } from "./styles"

export const Box = ( {children} :IBox) => {
    return (
        <Container>
            {children}
        </Container>
    )
}