import React from "react";
import {
    useQuery
} from "@apollo/client";

import { BlogPost } from './BlogPost'
import { BLOG_POSTS } from "./queries";

export const BlogPosts = () => {
    const { loading, error, data } = useQuery(BLOG_POSTS)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;

    if (data) return data.blog_post.map(blogPost => (
        <BlogPost
            key={blogPost.id}
            blogPost={blogPost}
        />
    ))
    return <div>Data: {JSON.stringify(data)}</div>
}
