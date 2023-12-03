import { TagContainer } from "./styles"
import { ITag } from "./interfaces"

export const Tag = ({ title, type } :ITag) => {
    return (
        <TagContainer type={type} >{title}</TagContainer>
    )
}