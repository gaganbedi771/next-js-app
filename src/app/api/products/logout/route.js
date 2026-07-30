import { NextResponse } from "next/server";

export async function POST(request) {
    try {
               const res=NextResponse.json({ message: "Logout successful" });

    res.cookies.set("token","",{maxAge:0});
    return res;
    } catch (error) {
        console.log(error);
    }
 
}