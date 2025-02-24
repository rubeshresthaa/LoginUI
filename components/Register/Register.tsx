"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {  z } from "zod"
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react";

const passwordSchema = z
  .string()
  .trim()
  .min(1, { message: "This field can not be empty" })
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/\d/, { message: "Password must contain at least one numeric digit" })
  .regex(/[!@#$%^&*(),.?":{}|<>]/, {
    message: "Password must contain at least one special character",
  });

const formSchema = z.object({
  email: z.string()
  .min(1, { message: "Email is required" }) // Ensures the field is not empty
  .email({ message: "Invalid email address" }) // Validates email format
  .min(5, { message: "Email must be at least 5 characters." }), 
  password:passwordSchema,
  confirmPassword:z.string().trim().min(1,{message:"Password Didnt Match"})
}).refine((data)=>data.password === data.confirmPassword,{
  message:"Password didn't match",
  path:["confirmPassword"]
})

export function Register() {
  const[showPass,setShowPass]=useState(false)
  const[confirmPass,setConfirmPass]=useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:"",
      confirmPassword:""
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) { 
    console.log(values)
    form.reset({
      email:"",
      password:"",
      confirmPassword:""
    });
  }

  return (
    <div className="space-y-5">
      <div className=" mb-2">
        <h1 className="text-xl lg:text-3xl font-bold">Create Your Account!</h1>
       
      </div>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Enter Your Email</FormLabel>
              <FormControl>
                <Input {...field} className="font-light"/>
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <div>
                <FormItem className="flex flex-col items-start">
              <FormLabel>Enter Your Password</FormLabel>
              <FormControl>
                <div className="flex justify-between items-center relative w-full">
                <Input {...field} type={showPass ? "text" : "password"} className="font-light"  />
                <IoMdEye className={`absolute right-6 cursor-pointer opacity-50 ${showPass ? "block" : "hidden"}`} onClick={()=>setShowPass(false)}  />
                <IoMdEyeOff className={`absolute right-6  cursor-pointer opacity-50 ${showPass ? "hidden" : "block"}`} onClick={()=>setShowPass(true)}   />
                </div>
                
              </FormControl>
              
              <FormMessage />
            </FormItem>

            </div>
          
          )}
        />
         <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Confirm Your Password</FormLabel>
              <FormControl>
                <div className="flex justify-between items-center relative w-full">
                <Input {...field} type={confirmPass ? "text" : "password"} className="font-light"  />
                <IoMdEye className={`absolute right-6 cursor-pointer opacity-50 ${confirmPass ? "block" : "hidden"}`} onClick={()=>setConfirmPass(false)}  />
                <IoMdEyeOff className={`absolute right-6  cursor-pointer opacity-50 ${confirmPass ? "hidden" : "block"}`} onClick={()=>setConfirmPass(true)}   />
                </div>
               
              </FormControl>
             

              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-center items-center">
        <Button type="submit" className="w-48 lg:w-60">Sign Up</Button>
        </div>
      </form>
    </Form>
     <div className="flex flex-col justify-center items-center gap-2 my-2">
      <p className="font-light text-lg">Or Sign up With</p>
          <div className="flex justify-center items-center gap-2">
          <FaFacebook />
          <AiFillGoogleCircle />
          <FaApple />
          </div>
     </div>
    </div>
   
  )
}
