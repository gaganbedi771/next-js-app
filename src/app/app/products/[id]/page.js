import React from 'react'

const page = async ({params}) => {
    const {id} = await params;
    console.log(params);
  return (
    <div>Product [{id}] details page — content coming soon!</div>
  )
}

export default page