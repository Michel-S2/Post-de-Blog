import { useContext } from "react"
import { PostContext } from "../context/PostContext"

export const Footer = () => {

    const postCtx = useContext(PostContext);

    return (
        <footer>
            <p>Total de posts <span>{postCtx?.posts.length}</span></p>
        </footer>
    )
}