import React from 'react'
import Link from 'next/link'

const page = () => {
      const posts = [
    { id: 1, title: "Blog Post 1" },
    { id: 2, title: "Blog Post 2" },
    { id: 3, title: "Blog Post 3" },
    { id: 4, title: "Blog Post 4" },
    { id: 5, title: "Blog Post 5" },
  ];


 return (
    <div>
      <h1>All Blog Posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/app/post/${post.id}`}>

              {post.title}

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page