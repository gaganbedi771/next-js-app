import { jwtVerify, SignJwt } from "jose";
const secretKey="abcde";

export const signToken = async (payload) => {
  return await new SignJwt(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("2h")
    .sign(secretKey);
};

export const verifyToken = async (token) => {
    try {
        const payload=await jwtVerify(token, secretKey);
        return payload;
    } catch (error) {
        console.log(error);
        return null;
    }
};
