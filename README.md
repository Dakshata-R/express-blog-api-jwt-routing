This is a blogging API built with Node.js, Express, and JWT authentication.


PROJECT SETUP
1.cd blog-api
2.npm install
3.node app.js
4.Use Postman to test APIs


TESTING ROUTES (SAMPLE)

1.Register
Method: POST
URL: http://localhost:3000/api/auth/register
Body → raw → JSON:
{
  "username": "john",
  "password": "1234"
}

2.Login
Method: POST
URL: http://localhost:3000/api/auth/login
Body:
{
  "username": "john",
  "password": "1234"
}

Copy the token you get.

3.Create Blog (Protected Route)
Method: POST
URL: http://localhost:3000/api/blogs
Headers: Authorization: Bearer <your-token-here>
Body:
{
  "title": "My First Blog",
  "content": "This is my first post using Node.js!"
}

4.Get All Blogs
Method: GET
URL: http://localhost:3000/api/blogs
Headers: (no token required)

5.Get Blog by ID
Method: GET
URL: http://localhost:3000/api/blogs/1
Headers: (no token required)

6.Update Blog (Protected)
Method: PUT
URL: http://localhost:3000/api/blogs/1
Headers: Authorization: Bearer <your-token-here>
Body (JSON):
{
  "title": "Updated Blog Title"
}

7.Delete Blog (Protected)
Method: DELETE
URL: http://localhost:3000/api/blogs/1
Headers: Authorization: Bearer <your-token-here>

