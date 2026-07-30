import React from 'react'
export async function generateMetadata({params}) {
     const { id } = await params;
    return {
        title: `Blog Post ${id}`,
        description: `This is the content of blog post ${id}.`,
    }
}

const page = async ({params}) => {
    const {id} =await params;

  return (
        <div>
      <h1>Blog Post {id}</h1>
      <p>This is the content of blog post {id}.</p>
    </div>
  )
}

export default page