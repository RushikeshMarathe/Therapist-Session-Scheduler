import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

// ✅ Define validation schema using Yup
const validationSchema = yup.object().shape({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/[a-z]/, "Must contain a lowercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[@$!%*?&]/, "Must contain a special character")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  specialization: yup.string().when("userType", {
    is: "therapist",
    then: (schema) => schema.required("Specialization is required"),
  }),
  experience: yup.number().when("userType", {
    is: "therapist",
    then: (schema) =>
      schema
        .typeError("Experience must be a number")
        .min(1, "Experience must be at least 1 year")
        .integer("Experience must be valid")
        .required("Experience is required"),
  }),
  licenseNumber: yup.string().when("userType", {
    is: "therapist",
    then: (schema) => schema.required("License Number is required"),
  }),
});

const Signup = () => {
  const [userType, setUserType] = useState("patient");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      userType: "patient",
    },
  });

  const handleUserTypeChange = (e) => setUserType(e.target.value);
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className='absolute top-16 left-28 flex items-center justify-center gap-1 text-red-500 text-xl font-bold cursor-pointer'
                    onClick={()=> navigate(-1)}><FaArrowLeft/> Back</div>
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>

        {/* User Role Selection */}
        <div className="flex justify-center gap-6 mb-5">
          {["patient", "therapist"].map((role) => (
            <label key={role} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value={role}
                checked={userType === role}
                onChange={handleUserTypeChange}
                className="accent-red-500"
              />
              <span className="text-gray-600 capitalize">{role}</span>
            </label>
          ))}
        </div>

        {/* Signup Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstname")}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
            />
            <p className="text-red-500 text-sm">{errors.firstname?.message}</p>
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastname")}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
            />
            <p className="text-red-500 text-sm">{errors.lastname?.message}</p>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
            />
            <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
          </div>

          {/* Therapist-Specific Fields */}
          {userType === "therapist" && (
            <>
              <div>
                <input
                  type="text"
                  placeholder="Specialization"
                  {...register("specialization")}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
                />
                <p className="text-red-500 text-sm">{errors.specialization?.message}</p>
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Years of Experience"
                  {...register("experience")}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
                />
                <p className="text-red-500 text-sm">{errors.experience?.message}</p>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="License Number"
                  {...register("licenseNumber")}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
                />
                <p className="text-red-500 text-sm">{errors.licenseNumber?.message}</p>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg text-lg hover:bg-red-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
