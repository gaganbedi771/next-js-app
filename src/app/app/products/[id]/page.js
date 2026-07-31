import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return {
    title: `${product.title} - Products Store`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <div>
      <h1>{product.title}</h1>

      <Image src="/assets/shampoo.jpg" alt="Product" width={100} height={100} />

      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
