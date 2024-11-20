"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


interface Axie {
  id: string;
  name: string;
  image: string;
  class: string;
  stage: string;
  breedCount: number;
  title: string;
  battleInfo: {
    banned: boolean;
  };
  parts: Array<{
    id: string;
    name: string;
    class: string;
    type: string;
    specialGenes: string;
  }>;
  __typename: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [axieData, setAxieData] = useState<Axie[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchdata() {
    try {
      const endpoint = 'https://graphql-gateway.axieinfinity.com/graphql';

      const query = `
        query GetAxieBriefList(
          $auctionType: AuctionType
          $criteria: AxieSearchCriteria!
          $from: Int
          $sort: SortBy
          $size: Int
          $owner: String
        ) {
          axies(
            auctionType: $auctionType
            criteria: $criteria
            from: $from
            sort: $sort
            size: $size
            owner: $owner
          ) {
            total
            results {
              ...AxieBrief
              __typename
            }
            __typename
          }
        }

        fragment AxieBrief on Axie {
          id
          name
          stage
          class
          breedCount
          image
          title
          battleInfo {
            banned
            __typename
          }
          parts {
            id
            name
            class
            type
            specialGenes
            __typename
          }
          __typename
        } 
      `;

      const variables = {
        from: 0,
        size: 300,
        // sortby: 'currentPrize',
        criteria: {}  // This can be filled based on your search criteria.
      };

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': '',  // If authentication is required
      };


      axios.post(endpoint, { query, variables }, { headers })
      .then(response => {
        console.log('Response data:', response.data);
        setAxieData(response.data.data.axies.results)
        console.log(axieData)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    } catch (error: any) {
      console.log(error.message);
      setLoading(false)
      toast.error(error.message);
    }
  }
  useEffect(() => {
    setAxieData(axieData);
  }, [axieData[0]]);

  async function logout() {
    try {
      await axios.get("../api/users/logout");
      toast.success("Logout successful");
      router.push("/Login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    // <div className="flex flex-col-2 items-center justify-center min-h-screen bg-gradient-to-b from-slate-200 to-slate-700 py-8 text-white">
    // <div className="flex flex-col-2 items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 w-full h-64 py-8 text-white">
    <div className="flex flex-col-2 items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-cyan-100 to-slate-300 w-full h-64 py-8 text-white">
    <Toaster />
      <div className="space-y-4">
        <button
          onClick={fetchdata}
          className="mx-4 bg-white text-purple-600 hover:bg-purple-100 px-6 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out"
        >
          Get Data
        </button>
        <button
          onClick={logout}
          className="mx-4 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out"
        >
          Logout
        </button>
        <table className="w-[100%]">
          <thead>
          <tr>
            <th className=" text-black">ID</th>
            <th className=" text-black">Name</th>
            <th className=" text-black">Image</th>
            <th className=" text-black">Class</th>
          </tr>
          </thead>
          <tbody>
          
            {axieData.map((axie, index) => (
              axie.class &&
              <tr className={`${index % 2 == 0 ? "bg-slate-400" : "bg-slate-200"}`} key={index}>
                <td className="text-black p-1 px-4">{axie.id}</td>
                <td className="text-black p-1 px-4">{axie.name}</td>
                <td className="text-black p-1 px-4"><img src={axie.image} alt="" height={40} width={40}/>{}</td>
                <td className="text-black p-1 px-4">{axie.class}</td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
}
