"use client";
import React, { useState, useEffect } from "react";
import Link from "next/dist/client/link";
import axios from "axios";
import toast from "react-hot-toast";
 

export default function SignupPage() {
 
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisable, setButtonDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup success ", response.data);
      window.location.href = '/login'
      } catch (error : any) {
      console.log("signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">{loading ? "Loading..." : "Signup Page"}</h1>
      <hr className="w-10/12 mb-8" />
      <div className="w-1/3">
        <label htmlFor="username" className="text-lg mb-2">
          Username:
        </label>
        <input
          className="p-2 border  mb-4 text-black focus:outline-none w-full"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />
        <label htmlFor="email" className="text-lg mb-2">
          Email:
        </label>
        <input
          className="p-2 border  mb-4  text-black focus:outline-none w-full"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
        <label htmlFor="password" className="text-lg mb-2">
          Password:
        </label>
        <input
          className="p-2 border  mb-4  text-black focus:outline-none w-full"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        <button
          onClick={onSignup}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          disabled={buttonDisable}
        >
          {buttonDisable ? "No signup" : "Signup"}
        </button>
        <Link href="/login">Visit login page</Link>
      </div>
    </div>
  );
}