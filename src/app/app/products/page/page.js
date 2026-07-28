import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Products page</h1>
      <ul>
        {Array.from({ length: 10 }, (curr, i) => {
          return (
            <li key={i + 1}>
              <Link href={`/app/products/${i + 1}`}>Product No. {i + 1}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
