"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const page = () => {
  const [productData, setProductData] = React.useState([]);
  const getDataHandler = async () => {
    const response = await fetch("/api/products");

    const data = await response.json();

    setProductData(data.products);
  };

  useEffect(() => {
    getDataHandler();
  }, []);
  return (
    <div>
      <h1>Products page</h1>
      {productData.length == 0 ? (
        <h2>No products found </h2>
      ) : (
        <>
          <h2>Products List</h2>
          <ul>
            {productData.map((product, i) => (
              <li key={i + 1}>
                <Link href={`/app/products/${i + 1}`}>Product No. {i + 1}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default page;
