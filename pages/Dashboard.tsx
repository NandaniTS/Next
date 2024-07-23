import React, { useEffect, useState } from 'react';
import { IoMoonOutline } from 'react-icons/io5';
import { IoMdNotifications } from 'react-icons/io';
import { IoPersonSharp } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

type ResponseData = {
  name: string;
  price: number;
  review: number;
  description: string;
};



 

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     redirect: {
//       destination: '/Dashboard',
//       // permanent: false,
//     },
//     props: { session },
//   };
// };

const Dashboard = () => {
  const [data, setData] = useState<ResponseData[]>([]);
  const router = useRouter();
  const { data: session, status } = useSession();
 

  // Fetch data from the API
  const getData = async () => {
    try {
      const response = await fetch('/api/Data', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      getData();
    }
  }, [status, session]);
 

  // Logout function
  const logout = async () => {

    try {
      await signOut({ redirect: false }); 
      console.log('cgvhbj')
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 border h-[100vh]">
        <div className="p-5 text-center text-2xl font-semibold">
          <h1>Ecom Master</h1>
        </div>
        <div className="w-full">
        <ul>
            <li className="w-[80%] text-white bg-blue-500 p-4 mx-auto py-3 rounded-lg text-center font-semibold text-xl my-2 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">
              Dashboard
            </li>
            <li className="w-[80%] text-white bg-blue-500 p-4 mx-auto py-3 rounded-lg text-center font-semibold text-xl my-2 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">
            Products
            </li>
            <li className="w-[80%] text-white bg-blue-500 p-4 mx-auto py-3 rounded-lg text-center font-semibold text-xl my-2 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">
              Customers
            </li>
            <li className="w-[80%] text-white bg-blue-500 p-4 mx-auto py-3 rounded-lg text-center font-semibold text-xl my-2 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">
            Reports
            </li>
            <li className="w-[80%] text-white bg-blue-500 p-4 mx-auto py-3 rounded-lg text-center font-semibold text-xl my-2 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">
             Orders
            </li>
            <li className="w-[80%] text-white bg-blue-500 p-4 mx-auto py-3 rounded-lg text-center font-semibold text-xl my-2 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">
             Statistics
            </li> 
            <li className="w-[80%] text-white bg-blue-500 p-4 mx-auto py-3 rounded-lg text-center font-semibold text-xl my-2 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500" onClick={logout}>
             Log Out
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full border p-4">
          <h2 className="text-center text-2xl font-semibold">Electronics</h2>
          <input
            type="text"
            className="border border-gray-200 p-2 rounded-xl w-1/2"
            placeholder="Search"
          />
          <div className="w-1/5 flex justify-between">
            <button className="border p-3 rounded-lg">
              <IoMoonOutline />
            </button>
            <button className="border p-3 rounded-lg">
              <IoMdNotifications />
            </button>
            <button className="border p-3 rounded-lg">
              <IoPersonSharp />
            </button>
          </div>
        </div>
        <div className="flex justify-between flex-wrap w-[90%] mx-auto py-2">
          {data.map((item) => (
            <div key={item.name} className="w-1/4 p-4 border m-2 rounded-lg shadow-lg">
              <h1 className="font-semibold text-3xl">{item.name}</h1>
              <p className="font-medium text-gray-700">Price: Rs {item.price}</p>
              <p className="font-semibold text-gray-700">Rating: {item.review}</p>
              <p className="font-medium text-gray-700">Description: {item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Dashboard;
// export { getServerSideProps };
