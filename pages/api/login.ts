import { NextApiRequest,NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      if (email === "user@example.com" && password === "password") {
        // const user = await authenticateUser(username, password)
        // const token = jwt.sign({ user:email }, process.env.JWT_SECRET, {
        //   expiresIn: '24h',
        // })
        return res.status(200).json({ message: "Login Successful" });
        // return res.status(200)
      } else {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
    }
    
  }