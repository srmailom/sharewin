"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import TextField from "@/app/components/ui/textField";
import Button from "@/app/components/ui/button";
import Label from "@/app/components/ui/label";
import Grid from "@/app/components/ui/grid";

export default function SignupPage() {
    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const userdata = await axios.post("../api/users/signup", user);
            console.log(userdata.data);
            toast.success(userdata.data.message);
            // add 3 seconds delay
            setTimeout(() => {
                router.push("/Login");
            }, 1000);
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <Grid className="grid-cols-1 w-[100%] bg-slate-500 bg-opacity-95 content-center justify-items-center h-svh">
            <Toaster position="top-right" reverseOrder={false} />

            {/* Card */}
            <div className="bg-slate-200 p-10 rounded-lg shadow-lg w-full max-w-md">
                <Label value={"Sign Up"} className="w-[100%] text-[40px] font-bold text-center"/>
                <Label value="Username"/>
                <TextField
                    type="text"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                />
                <Label value="Email"/>
                <TextField
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <Label value="Password"/>
                <TextField
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <Button 
                    name={loading ? "Processing..." : "Sign Up"} 
                    event={onSignup}
                    disable={buttonDisabled || loading}
                />
                <Link href="/Login">
                    <p className="text-center text-indigo-600 hover:underline mt-6 text-sm">
                        Already have an account? Visit Login page
                    </p>
                </Link>
            </div>
        </Grid>
    );
}
