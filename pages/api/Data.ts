import { NextApiRequest,NextApiResponse } from "next";
type ResponseData={
    name:string,
    price:number,
    review:number,
    description:string,

}
export default async function handler(req:NextApiRequest,res:NextApiResponse<ResponseData[]>){
    if(req.method=== 'GET'){
        res.status(200).json([
            { name: "Product 1", price: 20, review: 4.5, description: "Description of product 1" },
            { name: "Product 2", price: 30, review: 4.0, description: "Description of product 2" },
            { name: "Product 3", price: 40, review: 3.0, description: "Description of product 3" },
            { name: "Product 4", price: 50, review: 4.0, description: "Description of product 4" },
            { name: "Product 5", price: 60, review: 4.5, description: "Description of product 5" },
            { name: "Product 6", price: 70, review: 5.0, description: "Description of product 6" },
            { name: "Product 7", price: 80, review: 1.0, description: "Description of product 7" },
        ]);
    }
}   