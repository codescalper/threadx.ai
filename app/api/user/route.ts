import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password } = body;

        //To check if user exist with email already exist
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

        //To check if user exist with username already exist
        const existingUserByUsername = await db.user.findUnique({
            where: { username: username },
        });

        if (existingUserByUsername) {
            return NextResponse.json({
                user: null,
                message: { error: "User with this username already exists" },
                status: 409,
            });
        }

        const hashedPassword= await hash(password,10);
        const newUser = await db.user.create({
            data:{
                username,
                email,
                password:hashedPassword
            }
        })

        return NextResponse.json({user:newUser,message:"User created successfully"});
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}