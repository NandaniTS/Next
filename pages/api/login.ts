import { NextApiRequest,NextApiResponse } from "next";
// import { NextResponse } from "next/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      if (email === "abc@example.com" && password === "abcd") {
        return res.status(200).json({ message: "Login Successful" });
      } else {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
    }
    
  }