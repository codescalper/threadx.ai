import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import {z} from "zod";
//Define schema for input validation

const userSchema = z
.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Password should be greater than 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one numeric character'
    ),
})


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = userSchema.parse(body);

        // To check if user exists with email already exist
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



        // Hash the password
        const saltRounds = 10; // Number of salt rounds
        const hashedPassword = await hash(password, saltRounds);

        // Create a new user with the hashed password
        const newUser = await db.user.create({
            data:{
                email,
                password: hashedPassword
            }
        });
        const {password:newUserPassword,...rest}=newUser;


        return NextResponse.json({ user: rest, message: "User created successfully" },{status:201});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Something went wrong" },{status:501});
    }
}
