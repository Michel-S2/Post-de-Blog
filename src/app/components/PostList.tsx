import { useContext } from "react"
import { PostContext } from "../context/PostContext"

export const PostList = () => {
    const postCtx = useContext(PostContext);

    const handleRemove = (id: number) => {
        postCtx?.dispatch({
            type: 'remove',
            payload: {id}
        });
    }

    return (
        <div>
            {postCtx?.posts.map(item => (
                <div key={item.id} onClick={() => handleRemove(item.id)} className="p-3 border-b border-gray-500 hover:cursor-pointer hover:text-gray-500">
                    <div className="text-xl font-bold mb-2">{item.title}</div>
                    <div className="text-sm">{item.body}</div>
                </div>
            ))}
        </div>
    )
}