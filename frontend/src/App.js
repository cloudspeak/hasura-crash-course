import React from "react";
import { BlogPosts } from './BlogPosts'
import { AuthStatus } from './AuthStatus'
import { Token } from "./Token";
import { CreateBlogPost } from "./CreateBlogPost";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthStatus />
      </header>
      <main style={{ margin: "16px" }}>
        <h1>My Blog</h1>
        <BlogPosts />
        <CreateBlogPost />
      </main>
      <footer>
        <Token />
      </footer>
    </div>
  );
}

export default App;
