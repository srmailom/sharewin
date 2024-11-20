import { dbconn } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs'


dbconn();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const {token, password } = reqBody;
        const currentTime = new Date();

        const user = await User.findOne({
            forgotpasswordToken: token,
        });

        if (!user) {
            return NextResponse.json({ message: "Invalid user" }, { status: 400 });
        }
        else if (user.forgotpasswordTokenExpiry < currentTime) {
            return NextResponse.json({ message: "Expired token" }, { status: 400 });
        }

        const salt= await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)

        user.password = hashedpassword;
        user.forgotpasswordToken = undefined;
        user.forgotpasswordToeknExpiry = undefined;
        await user.save();

        return NextResponse.json({ message: "Password Rest Succcessfuly", success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
