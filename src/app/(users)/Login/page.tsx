"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import TextField from "@/app/components/ui/textField";
import Button from "@/app/components/ui/button";
import Label from "@/app/components/ui/label";
import Grid from "@/app/components/ui/grid";
import Description from "@/app/components/ui/description";

export default function LoginPage() {
    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [processing, setProcessing] = React.useState(false);

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    const onLogin = async () => {
        try {
            setProcessing(true);
            const userdata = await axios.post("../api/users/login", user);
            toast.success(userdata.data.message);
            router.push("/profile");
        } catch (error: any) {
            toast.error(error.response?.data?.error || "An error occurred");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="w-[100%] h-screen">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="flex flex-row flex-wrap">
                <Grid className="grid-cols-1 w-[50%] bg-slate-200 bg-opacity-95 place-items-center place-self-center h-svh">
                    <div className="w-[50%]">
                        <Label value="Login" className="w-[100%] text-[40px] font-bold text-center"/>
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
                            id="password"
                            name="password"
                            value={user.password}
                            type="password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                        <Button name={processing ? "Processing..." : "Login"} event={onLogin} disable={buttonDisabled || processing} />
                        <Link href="/forgetpassword">
                            <p className="text-center text-indigo-600 hover:underline mt-4 text-sm">
                                Forgot your password?
                            </p>
                        </Link>
                    </div>
                </Grid>
                <Grid className="grid-cols-1 w-[50%] bg-slate-500 bg-opacity-95 content-center justify-items-center h-svh">
                <Description className="w-[40%]">
                        <p> Create account here </p>
                    </Description>
                    <div className="w-[40%]">
                        <Link href="/signup">
                            <button className="mt-4 w-full py-3 px-4 rounded-lg text-white font-semibold tracking-wide bg-gradient-to-r from-slate-200 to-slate-400 hover:from-slate-500 hover:to-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </Grid>
            </div>
        </div>
    );
}
