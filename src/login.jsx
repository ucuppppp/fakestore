import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z  from "zod"


const loginSchema = z.object({
    username: z.string(),
    password: z.string().min(8, "Minimal 8 karakter!")
})

export default function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
      <>
        <div className="w-md h-[50vh] outline rounded-xl">
          <h1 className="py-4 !text-4xl font-bold">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col p-4 m-10 gap-4">
              <div className="flex flex-col items-start">
                <label className="font-bold">Username :</label>
                <input
                  type="text"
                  {...register("username")}
                  className="w-full outline rounded p-2"
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
              <div className="flex flex-col items-start">
                <label className="font-bold">Password :</label>
                <input
                  type="text"
                  {...register("password")}
                  className="w-full outline rounded p-2"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </>
    );
}