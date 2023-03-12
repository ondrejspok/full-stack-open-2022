import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogService";
import { createBlog, getAll, getLoginToken } from "./services/blogs";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const loginResponse = await getLoginToken(username, password);
    if (loginResponse.error) {
      showNotification(loginResponse.error, 3000);
    } else if (loginResponse.token) {
      window.localStorage.setItem("user", JSON.stringify(loginResponse));
      setUser(loginResponse);
    }
  }

  async function getAllBlogs() {
    let blogsResponse = await getAll();

    blogsResponse = blogsResponse.filter(
      (blog) => blog.user.username === user.username
    );
    setBlogs(blogsResponse);
  }

  const logOut = () => {
    window.localStorage.clear();
    setUser("");
    setBlogs("");
  };

  const showNotification = (text, duration) => {
    setErrorMessage(text);
    setTimeout(() => {
      setErrorMessage("");
    }, duration);
  };

  //add create blog for logged-in user

  async function handleCreate(e) {
    e.preventDefault();
    const blogObj = {
      title: e.target.title.value,
      author: e.target.author.value,
      url: e.target.url.value,
    };

    console.log(blogObj);
    const response = await createBlog(user.token, blogObj);
    showNotification(`blog saved by ${response.username}`, 3000);
    getAllBlogs();
  }

  useEffect(() => {
    getAllBlogs();
  }, [user]);

  if (user) {
    return (
      <div>
        <h2>blogs</h2>
        <p>{user.username} logged in</p>
        <button onClick={logOut}>log out </button>
        <h3>Create new</h3>
        <form onSubmit={handleCreate}>
          <label htmlFor="title">title</label>
          <input name="title" type="text" />
          <br />
          <label htmlFor="author">author</label>
          <input name="author" type="text" />
          <br />
          <label htmlFor="url">url</label>
          <input name="url" type="text" />
          <br />
          <input type="submit" value="add" />
        </form>
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    );
  } else if (!user) {
    return (
      <div>
        <h2>log in to application</h2>
        <p>{errorMessage}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username_input">username</label>
          <input
            type="text"
            name="username_input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password_input">password</label>
          <input
            type="password"
            name="password_input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
};

export default App;
