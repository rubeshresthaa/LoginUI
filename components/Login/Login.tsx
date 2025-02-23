  "use client"
  import { zodResolver } from "@hookform/resolvers/zod"
  import { useForm } from "react-hook-form"
  import { z } from "zod"
  import { FaFacebook } from "react-icons/fa";
  import { AiFillGoogleCircle } from "react-icons/ai";
  import { FaApple } from "react-icons/fa";

  import { Button } from "@/components/ui/button"
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"

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
        <div className="lg:flex justify-center items-center gap-5">
        <div className="m-auto lg:my-0 my-2 whitespace-nowrap flex flex-col items-center">
          {/* {Left Section} */}
          <h1 className="text-xl lg:text-3xl font-bold mt-4">Welcome Back!</h1>
          <p className="text-xs lg:text-sm font-light"><span className="underline underline-offset-8 decoration-slate-950">Login to</span> your account</p>
        </div>
        <div className="hidden lg:block w-px h-56 bg-gray-500">
        &nbsp;
        </div>
        {/* Right Section */}
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 m-auto lg:py-10 mx-4 text-md">
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
              <FormItem>
                <FormLabel>Enter Your Password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-5">
          <p className="text-xs cursor-pointer font-light">Forgot Password?</p>
          <p className="text-xs font-light">Don't have an Account?<strong className="ml-2 text-xs cursor-pointer font-bold underline underline-offset-4 hover:text-blue-700">Register Now!</strong></p>
          </div>
          <div className="flex justify-center items-center mx-4">
          <Button type="submit" className="w-48 lg:w-60 hover:bg-gray-800">Login</Button>
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
