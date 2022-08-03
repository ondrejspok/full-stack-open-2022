const listHelper = require('../utils/list_helper')

const dummyBlogs = [
    {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    },
    
    {
        title: 'Statement to-go Harmul considered Be May',
        author: 'Deseger X. Eggstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 55,
    },
]

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

test('sum of likes counts correct', () => {
    expect(listHelper.totalLikes([{likes:10}, {likes:15}, {likes:12}])).toBe(37)
})

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]
  
    test('when list has only one blog, equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(5)
    })
  
    test('when popular D. Eggstra beats hated E. Dijkstra a.k.a. favorite blog test', () => {
        const result = listHelper.favoriteBlog(dummyBlogs)
        expect(result).toEqual({
            title: 'Statement to-go Harmul considered Be May',
            author: 'Deseger X. Eggstra',
            likes: 55, 
        })
    })
})

