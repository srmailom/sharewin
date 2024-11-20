import { dbconn } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import { sendMail } from "@/helpers/mailer";

dbconn()

export async function POST(request:NextRequest){

    try {
        const reqBody = await request.json()
        const{email}=reqBody
        const user =await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"User not found"},{status:404})
        }
        
        sendMail({email:user.email,emailType:'REST',userId:user._id})


        return  NextResponse.json({
            message:"Rest Link Send successfully",
            success:true,
            
        })
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}