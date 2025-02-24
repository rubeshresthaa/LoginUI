  "use client"
  import { zodResolver } from "@hookform/resolvers/zod"
  import { useForm } from "react-hook-form"
  import { z } from "zod"
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
    })
  })

  export function Login() {

    const[showPass,setShowPass]=useState<boolean | undefined>(false)
    
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
      <div className="space-y-5">
        <div className="lg:flex justify-center items-center gap-5 space-y-5">
        <div className="lg:my-0 my-2 whitespace-nowrap flex flex-col items-center space-y-2">
          {/* {Left Section} */}
          <h1 className="text-xl lg:text-3xl font-bold mt-4">Welcome Back!</h1>
          <p className="text-xs lg:text-sm font-light"><span className="underline underline-offset-8 decoration-slate-950">Login to</span> your account</p>
        </div>
        {/* vertical Line */}
        <div className="hidden lg:block w-px h-56 bg-gray-500">
        &nbsp;
        </div>
        {/* Right Section */}
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 lg:py-10 text-md">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
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
            )}
          />
           <div className="flex justify-center items-center mx-4">
          <Button type="submit" className="w-48 lg:w-60 hover:bg-gray-800">Login</Button>
          </div>
          <div className="space-y-5 flex flex-col items-start">
          <p className="text-[13px] cursor-pointer font-light">Forgot Password?</p>
          <p className="text-[13px] font-light">Don&apos;t have an Account?<strong className="ml-2 text-xs cursor-pointer font-bold underline underline-offset-4 hover:text-blue-700">Register Now!</strong></p>
          </div>
         
          
        </form>
        
      </Form>
      </div>
      <div className="font-light lg:space-y-2 flex flex-col justify-center items-center">
        <p className="">Or Login With</p>
            <div className="flex justify-center items-center gap-x-2 cursor-pointer my-2">
            <FaFacebook />
            <AiFillGoogleCircle />
            <FaApple />
            </div>
      </div>
      </div>
      
    
    )
  }
