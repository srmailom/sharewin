"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TextField from "@/app/components/ui/textField";
import Button from "@/app/components/ui/button";
import Label from "@/app/components/ui/label";

export default function ResetPasswordPage() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const params = window.location.search.split('=')[1];
        setToken(params || "");
        if (!params) {
            toast.error("Invalid reset request");
        }
    }, []);

    const handleResetPassword = async () => {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post("../api/users/resetpassword", { token, password });
            // if (response.)
            toast.success("Password reset successfully");
            setTimeout(() => {
                router.push("/Login");
            }, 3000);
            
        } catch (error: any) {
            console.log(error)
            toast.error(error.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-600 to-slate-500 py-12">
            <Toaster position="top-right" reverseOrder={false} />
            <Label value="Reset Password" className="text-4xl font-bold mb-6 text-white"/>
            
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <Label value="New Password"/>
                <TextField
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Label value="Confirm Password"/>
                <TextField
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                    name={loading ? "Processing..." : "Reset Password"}
                    event={handleResetPassword}
                    disable={loading}  
                />
            </div>
        </div>
    );
}
