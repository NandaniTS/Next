import React,{useState} from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
    let[email,setEmail]=useState<String>("")
    let [password,setPassword]=useState<String>("")
    const Login=async()=>{
        try{
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
              }); 
            if (response.status === 200) {
                router.push("/Dashboard")
              } else {
                console.log("error")
              } 
            
        }catch(error){
            console.log(error)

        }
    }

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
        onClick={Login}
      >
        LogIn
      </button>
      <br />
    </div>
  );
}
