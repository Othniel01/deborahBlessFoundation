"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../lib/components/firebase-config";

// Initialize Firebase

const auth = getAuth(app);

export default function Admin() {
  const router = useRouter(); // Now from next/navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard on successful login
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid email or password.");
      console.error(err);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="bg-black relative h-[100vh] w-[1740px]">
          <Image
            src={"/image/image-two.png"}
            alt="Cover Image"
            className="filter grayscale object-cover w-full h-full"
            width={2740}
            height={2740}
            quality={75}
          />
          <div className="bg-black absolute top-0 left-0 w-full h-full opacity-60"></div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Login to dashboard</h1>
          <p className="mt-2 text-sm text-[#636363]">
            Enter password below to login to admin
          </p>

          <form className="w-[440px] mt-8" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-xs p-2 border border-solid border-[#afafaf] placeholder:text-[#afafaf] h-[45px] rounded-[5px]"
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 text-xs p-2 border border-solid border-[#afafaf] placeholder:text-[#afafaf] h-[45px] rounded-[5px]"
              required
            />
            <button className="w-full hover:opacity-75 text-xs text-white mt-8 bg-black rounded-[5px] h-[45px]">
              Continue
            </button>
            {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
