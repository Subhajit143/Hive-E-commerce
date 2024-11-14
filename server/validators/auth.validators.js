import z from "zod"

const loginSchema=z.object({
    email: z
    .string({required_error: "Email is Required"})
    .trim()
    // .email({message: "Invalid Email"})
    .min(5,{message: "Please enter Email atleast 5 Characters"})
    .max(255,{message: "Please enter Email Less the 255 characters"}),

   
    password: z
    .string({required_error: "Password is Required"})
    .min(7,{message: "Password must be atleast 7 Characters"})
    .max(255,{message: "Password can'nt be greater then 255 characters"}),
})

const signupSchema=loginSchema.extend({
    username: z
    .string({required_error: "Name is Required"})
    .trim()
    .min(3,{message: "Name must be atleast 3 Characters"})
    .max(255,{message: "Please enter Less the 255 characters"}),
    
   

   });


export { loginSchema}
export { signupSchema}