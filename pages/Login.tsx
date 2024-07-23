import React,{useState} from "react";
import { useRouter } from "next/router";
import { signIn } from 'next-auth/react';

export default function Login() {
  const router = useRouter();
    let[email,setEmail]=useState<String>("")
    let [password,setPassword]=useState<String>("")
 
    // const login = async (e:React.FormEvent) => {
    //   try {
    //     const response = await fetch('/api/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ email, password }),
    //     });
    
    //     if (!response.ok) {
    //       throw new Error('Login failed');
    //     }
    
    //     const { token } = await response.json();
    //     console.log('Token received:', token);
        
    //     localStorage.setItem('jwtToken', token);
    //     console.log('Redirecting to dashboard');
        
    //     router.push('/Dashboard');
    //   } catch (error) {
    //     console.error('Login error:', error);
    //   }
    // };

    const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });
        console.log('SignIn result:', result);
        if (result?.error) {
          console.error('Login failed:', result.error);
        } else {
          console.log('Login successful');
          router.push('/Dashboard');
        }
      } catch (error) {
        console.error('Login error:', error);
      }
    };

  return (
    <div className="border bg-white shadow-lg mt-5 rounded-lg w-1/2 mx-auto flex flex-col justify-center items-center p-6">
      <h1 className="font-bold text-blue-500  text-3xl my-4 ">Login Form</h1>
      <input
        id="email"
        type="string"
        className="border p-2 rounded-lg my-2 w-1/2"
        placeholder="Enter your email"
        onChange={(e)=>setEmail(e.target.value)}
      />{" "}
      <br />
      <input
        id="password"
        type="password"
        className="border p-2 rounded-lg my-2 w-1/2"
        placeholder="Enter your password"
        onChange={(e)=>setPassword(e.target.value)}
      />{" "}
      <br />
      <button
        className=" bg-blue-500 p-4 py-3 rounded-lg text-white font-semibold w-1/2"
        onClick={login}
      >
        LogIn
      </button>
      <br />
    </div>
  );
}
