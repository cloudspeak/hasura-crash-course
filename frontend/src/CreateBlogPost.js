import { useMutation } from "@apollo/client";
import { BLOG_POSTS, INSERT_BLOG_POST } from "./queries";

export const CreateBlogPost = () => {

    let titleInput, contentInput
    const [insertPost] = useMutation(INSERT_BLOG_POST)

    return (
        <form
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "stretch"
            }}
            onSubmit={ e => {
                e.preventDefault()
                insertPost({
                    variables: {
                        title: titleInput.value,
                        content: contentInput.value
                    },
                    refetchQueries: [{
                        query: BLOG_POSTS
                    }]
                })
                titleInput.value = ''
                contentInput.value = ''
            }}
        >
            <h2>Create a new post</h2>
            
            <input
                style={{
                    fontSize: "16px",
                    padding: "8px",
                    marginBottom: "8px"
                }}
                type="text"
                placeholder="Enter your title"
                ref={i => titleInput = i}
            ></input>

            <textarea
                style={{
                    fontFamily: "sans-serif",
                    padding: "8px",
                    marginBottom: "8px"
                }}
                placeholder="Write your post here..."
                ref={i => contentInput = i}
            ></textarea>
        
            <button
                style={{
                    height: "32px"
                }}
                type="submit"
            >Submit</button>
        </form>
    )
}
