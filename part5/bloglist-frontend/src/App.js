import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import { getAll, getLoginToken } from "./services/blogs";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

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

  //add create blog for logged-in user

  async function handleCreate(e) {
    e.preventDefault();
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
          <label>author</label>
          <input type="text" onChange={(e) => setAuthor(e.target.value)} />
          <br />
          <label>title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
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
