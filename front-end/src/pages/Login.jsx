import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log("Login Data:", data);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className='absolute top-16 left-28 flex items-center justify-center gap-1 text-red-500 text-xl font-bold cursor-pointer'
            onClick={()=> navigate(-1)}><FaArrowLeft/> Back</div>


            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Login</h2>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-red-400"
                                }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-red-400"
                                }`}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg text-lg hover:bg-red-600 transition duration-200">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
