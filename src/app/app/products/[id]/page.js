"use client"
import React, { useEffect } from 'react'
import Image from "next/image";

const page = ({params}) => {
    const {id} = React.use(params);
    const [productData, setProductData] = React.useState(null);

    useEffect(() => {

      async function fetchProductData() {
        try {
          const response = await fetch(`/api/products/${id}`);
          const data = await response.json();
          setProductData(data);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      }

      fetchProductData();
    }, []);

    
  return (
    <div>
      <h1>Product [{id}] Details</h1>
      {productData!==null && <><p>Title: {productData.title}</p>
      <Image src="/assets/shampoo.jpg" alt="shampoo image" width={100} height={100}></Image>
      <p>Description: {productData.description}</p>
      <p>Price: ${productData.price}</p> </>}
    </div>
  )
}

export default page