import { jwtVerify, SignJWT } from "jose";
const secretKey="abcde";

export const signToken = async (payload) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("2h")
    .sign(new TextEncoder().encode(secretKey));
};

export const verifyToken = async (token) => {
    try {
        const payload=await jwtVerify(token, new TextEncoder().encode(secretKey));
        return payload;
    } catch (error) {
        console.log(error);
        return null;
    }
};
