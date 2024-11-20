"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TextField from "@/app/components/ui/textField";
import Button from "@/app/components/ui/button";
import Label from "@/app/components/ui/label";

export default function ForgetPasswordPage() {
    const [email, setEmail] = useState<string>("");
    const router = useRouter();

    const handleSubmit = async () => {
        try {
            const res = await axios.post("../api/users/forgetpassword", { email });
            toast.success(res.data.message);
            // router.push("/resetpassword");
            
        } catch (error: any) {
            console.log(error)
            if (error.response) {
                toast.error(error.response.data.error || "An error occurred");
            } else {
                toast.error("An error occurred");
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-600 to-slate-500 py-12">
            <Toaster position="top-right" reverseOrder={false} />
            
            <div className="bg-slate-200 p-10 rounded-lg shadow-lg w-full max-w-md">
                <Label className="text-3xl font-bold text-center mb-6 text-indigo-600" value="Forgot Password"/>
                <Label value="Enter your email to reset your password"/>

                {/* Email Input */}
                <TextField
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* Submit Button */}
                <Button 
                    name="Submit" 
                    event={handleSubmit} className={`w-full py-3 px-4 rounded-lg text-white font-semibold tracking-wide bg-gradient-to-r from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out ${!email ? "opacity-50 cursor-not-allowed" : ""}`}
                    disable={!email}    
                />
            </div>
        </div>
    )
}
