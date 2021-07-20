import { useMutation } from "@apollo/client";
import React from "react";
import { BLOG_POSTS, SET_BLOG_POST_PUBLISHED } from "./queries";

export const BlogPost = ({blogPost}) => {

    const [setBlogPostPublished] = useMutation(SET_BLOG_POST_PUBLISHED)

    const onSetPublish = (published) => {
      setBlogPostPublished({
        variables: {
          id: blogPost.id,
          published
        },
        refetchQueries: [{
            query: BLOG_POSTS
        }]
      })
    }

    let postedBy = ""
    if (blogPost.user?.name) postedBy = "by " + blogPost.user?.name
    else if (blogPost.user_id) postedBy = "by " + blogPost.user_id

    return (
      <div style={{
        border: "2px solid black",
        borderRadius: "5px",
        padding: "16px",
        marginTop: "16px"
      }}>
        <h2>{blogPost.title}</h2>
        <h4>{new Date(blogPost.date).toDateString()} {postedBy}</h4>
        <p>{blogPost.content}</p>

        {
          blogPost.is_published
              ? <div><button
                  type="button"
                  onClick={() => onSetPublish(false)}
                >Unpublish</button></div>
              : <div><button
                  type="button"
                  onClick={() => onSetPublish(true)}
                >Publish</button></div>
        }
        
        <div style={{
          fontSize: "12px",
          fontStyle: "italic",
          color: "#888888"
        }}>
          {blogPost.activities.map(a => (
            <p key={a.id}>{a.type} {new Date(a.date).toDateString()}</p>
          ))}
        </div>
      </div>
    )
  }