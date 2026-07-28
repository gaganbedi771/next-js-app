
export const GET = async (request, { params }) => {
    try {
       const { id } =await  params;
        const response=await fetch(`https://dummyjson.com/products/${id}`);
        const data=await response.json();
        console.log(data);
        return Response.json(data);
    } catch (error) {
        console.log(error);
    
    }
}