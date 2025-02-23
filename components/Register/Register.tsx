"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { boolean, z } from "zod"
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

const formSchema = z.object({
  email:z.string().email().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  password:z.string().min(5,{
    message:"Password must be at least 5 characters"
  }).max(10,{
    message:"Password must not be more than 10"
  }),
  confirmPassword:z.string()
 
})

export function Register() {
 
  const[showPass,setShowPass]=useState<boolean | undefined>(false)
  const[confirmPass,setConfirmPass]=useState<boolean | undefined>(false)

  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:""
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    
    console.log(values)
  }


  return (
    <div>
      <div className="space-y-2 mb-2">
        <h1 className="text-xl lg:text-3xl font-bold">Create Your Account!</h1>
        <div className="w-16 h-5"></div>
       
      </div>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Email</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <FormItem>
              <FormLabel>Enter Your Password</FormLabel>
              <FormControl>
                <div className="flex justify-between items-center relative">
                <Input {...field} type={showPass ? "text" : "password"} className="font-light"  />
                <IoMdEye className={`absolute right-6 cursor-pointer opacity-50 ${showPass ? "hidden" : "block"}`} onClick={()=>setShowPass(true)}  />
                <IoMdEyeOff className={`absolute right-6  cursor-pointer opacity-50 ${showPass ? "block" : "hidden"}`} onClick={()=>setShowPass(false)}   />
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
            <FormItem>
              <FormLabel>Confirm Your Password</FormLabel>
              <FormControl>
                <div className="flex justify-between items-center relative">
                <Input {...field} type={showPass ? "text" :"password"} className="font-light" />
                <IoMdEye className={`absolute right-6 cursor-pointer opacity-50 ${confirmPass ? "hidden" : "block"}`} onClick={()=>setConfirmPass(true)}/>
                <IoMdEyeOff className={`absolute right-6 cursor-pointer opacity-50 ${showPass ? "block" : "hidden"}`} onClick={()=>setConfirmPass(false)} />
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
