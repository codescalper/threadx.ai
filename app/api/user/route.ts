import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password } = body;

        //To check if user exist with
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email },
        });

        if (existingUserByEmail) {
            return NextResponse.json({
                user: null,
                message: { error: "User with this email already exists" },
                status: 409,
            });
        }
        return NextResponse.json(body);
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}