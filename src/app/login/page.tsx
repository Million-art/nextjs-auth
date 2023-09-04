"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
   });

   const [disable, setDisable] = useState(false)
   const [loading, setLoading] = useState(false)
  const onLogin = async () => {
     try {
      setLoading(true)
      const response=await axios.post("/api/users/login",user)
      console.log("loginsuccess",response.data)
      toast.success("Login success")
      window.location.href = '/profile'
     } catch (error : any) {
      console.log("login failed",error.message)
      toast.error("error.message")
     }
     finally{
      setLoading(false)
     }
  };

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0){
      setDisable(false)
    }
    else setDisable(true)
     
  }, [user])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">{loading? "loading..." : "Login Page"}</h1>
      <hr className="w-10/12 mb-8" />
      <div className="w-1/3">
        
        <label htmlFor="email" className="text-lg mb-2">
          Email:
        </label>
        <input
          className="p-2 border rounded-sm mb-4 focus:outline-none text-black focus:border-gray-600 w-full"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
        <label htmlFor="password" className="text-lg mb-2">
          Password:
        </label>
        <input
          className="p-2 border rounded-sm mb-4 focus:outline-none text-black focus:border-gray-600 w-full"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={onLogin}
        >
          Login
        </button> 
        <Link href="/signup" className=" ml-10"> Register here</Link>
      </div>
    </div>
  );
}