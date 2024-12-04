'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Header(){
    const contentList = [
        "About",
        "Skills",
        "Approach"
    ]
    
    const router = useRouter();

    async function logout() {
        try {
          await axios.get("../api/users/logout");
          toast.success("Logout successful");
          router.push("../Login");
        } catch (error: any) {
          console.log(error.message);
          toast.error(error.message);
        }
      }

    return(
        <>
        <header className="bg-inherit flex sticky top-0 mx-28 py-2 w-auto h-16 content-center px-2 justify-between">
            <button className="px-2 text-[25px] text-pretty hover:scale-125 text-white "> Home </button>
            <p className="text-center text-[25px] text-white space-x-4"> 
                {contentList.map((content) => (
                    <a key={content} href={`#${content}`}>{content}</a>
                ))}
            </p>
            <button onClick={logout} className="text-white border-none text-[25px]"> Logout </button>
        </header>  
        </>
    )
}