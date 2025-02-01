import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as z from "zod";
import { useState, useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(6, "Minimal 6 karakter!"),
});

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showLight, setShowLight] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    login(data);
  };

  // Efek senter saat password terlihat
  useEffect(() => {
    if (showPassword) {
      setShowLight(true);
    } else {
      setShowLight(false);
    }
  }, [showPassword]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-md h-2xl outline rounded-xl flex gap-10 justify-center items-center p-8 shadow-lg">
        <h1 className="py-4 text-4xl font-bold">Login</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="w-72 flex flex-col gap-4 p-2">
          {/* Username */}
          <div className="flex flex-col items-start">
            <label className="font-bold">Username:</label>
            <input
              type="text"
              {...register("username")}
              className="w-full outline rounded p-2"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>

          {/* Password + Tombol Toggle */}
          <div className="relative flex flex-col items-start">
            <label className="font-bold">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-full outline rounded p-2 text-white relative z-10"
            />
            {/* Efek Senter */}
            <div
              className={`absolute z-10 top-6 inset-0 bg-gradient-to-r from-transparent to-yellow-400 transition-opacity duration-500 ${showLight ? "opacity-100" : "opacity-0"} pointer-events-none`}
              style={{
                clipPath: "polygon(0% 0%, 100% 40%, 100% 60%, 0% 100%)",
              }}
            ></div>

            {/* Tombol Show Password */}
            <button
              type="button"
              onMouseOver={() => setShowPassword(true)}
              onMouseOut={() => setShowPassword(false)}
              className="absolute z-20 right-2 top-11 transform -translate-y-1/2 text-white cursor-pointer"
            >
              {showPassword ? <EyeSlashIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
            </button>

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className="cursor-pointer outline p-2 rounded mt-3 hover:bg-white hover:text-black transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}



// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";
// import * as z from "zod";
// import { useState, useEffect } from "react";
// import { useAuthStore } from "../store/authStore";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// const loginSchema = z.object({
//   username: z.string(),
//   password: z.string().min(6, "Minimal 6 karakter!"),
// });

// export default function Login() {
//   const navigate = useNavigate();
//   const login = useAuthStore((state) => state.login);
//   const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

//   const [errorMessage, setErrorMessage] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showLight, setShowLight] = useState(false);

//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = (data) => {
//     login(data);
//   };

//   useEffect(() => {
//     if (showPassword) {
//       setShowLight(true);
//       // setTimeout(() => setShowLight(false), 500); // Animasi 0.5s
//     }else{
//       setShowLight(false);
//     }
//   }, [showPassword]);

//   return (
//     <div className="w-full h-screen flex justify-center items-center">
//       <div className="w-md h-2xl outline rounded-xl flex flex-col justify-center items-center p-8 shadow-lg">
//         <h1 className="py-4 text-4xl font-bold">Login</h1>
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//         <form onSubmit={handleSubmit(onSubmit)} className="w-72 flex flex-col gap-4">
//           {/* Username */}
//           <div className="flex flex-col items-start">
//             <label className="font-bold">Username:</label>
//             <input
//               type="text"
//               {...register("username")}
//               className="w-full outline rounded p-2"
//             />
//             {errors.username && (
//               <p className="text-red-500">{errors.username.message}</p>
//             )}
//           </div>

//           {/* Password + Tombol Toggle */}
//           <div className="relative flex flex-col items-start">
//             <label className="font-bold">Password:</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               {...register("password")}
//               className="w-full outline rounded p-2   text-white relative z-10"
//             />
//             {/* Efek Senter */}
//             <div
//               className={`absolute inset-0 top-6 z-20 bg-gradient-to-r from-transparent to-yellow-400 transition-all duration-300 ${showLight ? "opacity-100" : "opacity-0"} pointer-events-none`}
//             ></div>

//             {/* Tombol Show Password */}
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute z-20 right-2 top-11 transform -translate-y-1/2 text-white"
//             >
//               {showPassword ? <EyeSlashIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
//             </button>

//             {errors.password && (
//               <p className="text-red-500">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Tombol Login */}
//           <button
//             type="submit"
//             className="cursor-pointer outline p-2 rounded mt-3 hover:bg-white hover:text-black transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
