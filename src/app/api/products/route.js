export const GET = async (request) => {
  try {
    console.log("fetching new data");
    const response = await fetch("https://dummyjson.com/products", {
      next: { revalidate: 60 },
    });
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.log(error);
  }
};
