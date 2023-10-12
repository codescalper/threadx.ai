"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Label } from "@/components/ui/label"
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from "next/link";
import {signIn} from "next-auth/react"
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Password should be greater than 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one numeric character'
    ),
});


export default function SignIn() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
       email: '',
       password: '',
    },
  });

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log("onSubmit called");
    const signInData = await signIn('credentials', {
      email: value.email,
      password: value.password,
      redirect: false,
    })

    if(signInData?.error) {
      toast.error('Invalid credentials')
      console.log(signInData.error)
    }else{
      router.push('/generate')
      toast.success('Logged in successfully!')

    }

    // Success, show toast
  
   
  }
 

  

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96 sm:w-96 md:w-96 lg:w-96 xl:w-96">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button variant="outline" onClick={()=>signIn('github',{callbackUrl:'http://localhost:3000/generate'})}>
                <FaGithub className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" onClick={()=>signIn('google',{callbackUrl:'http://localhost:3000/generate'})}>
                <FaGoogle className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="xyz@example.com" {...form.register('email')} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...form.register('password')}  />
              {form.formState.errors.password && ( // Check if there's an error for the 'password' field
                <p className="text-red-500 text-xs">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type='submit' className="w-full">Sign In</Button>
            
          </CardFooter>
          <p className='text-center text-sm mt-2'>
              If you don&apos;t have an account, please&nbsp;
              <Link className='text-orange-500 hover:underline' href='/sign-up'>
                Sign up 
              </Link>
            </p>
        </form>
      
      </Card>
    </div>
  )
}
