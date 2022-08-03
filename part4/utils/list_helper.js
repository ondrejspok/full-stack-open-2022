const blog = require("../models/blog")

const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
    const likesTotal = blogs.reduce(function(sum, blog) {
        return sum + blog.likes
    }, 0)
    return likesTotal
}

const favoriteBlog = (blogs) => {
    const favBlog = blogs.reduce((fav, blog) => (fav.likes > blog.likes ? fav : blog))

    return {
        title: favBlog.title,
        author: favBlog.author,
        likes: favBlog.likes,
    }
}

  module.exports = {
    dummy, totalLikes, favoriteBlog
  }