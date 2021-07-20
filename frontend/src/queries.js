import {
    gql
} from "@apollo/client";

export const BLOG_POSTS = gql`
    query GetBlogPosts {
        blog_post {
            id
            date
            title
            content
            is_published
            user_id
            activities {
                id
                date
                type
            }
        }
    }
`

export const SET_BLOG_POST_PUBLISHED = gql`
    mutation SetBlogPostPublished($id: Int!, $published: Boolean!) {
        update_blog_post(
            where:{
                id: {
                    _eq: $id
                }
            },
            _set:{
                is_published: $published
            }
        ) {
            affected_rows
        }
    }
`

export const INSERT_BLOG_POST = gql`
    mutation InsertBlogPost($title: String!, $content: String!) {
        insert_blog_post_one(object: {
            title: $title
            content: $content
        }) {
            id
        }
    }
`