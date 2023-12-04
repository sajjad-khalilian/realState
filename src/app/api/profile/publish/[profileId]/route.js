import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function PATCH(req , context){
    try {
        await connectDB()

        const id  = context.params.profileId

        const session = await getServerSession(req)
        if(!session){
            return NextResponse.json({error: "لطفا وارد حساب کاربری خود شوید"} , {status: 401} , redirect("/login"))
        }


        const user = await User.findOne({email: session.user.email})
        if(!user){
            return NextResponse.json({error: "حساب کاربری یافت نشد"})
        }


        if(user.role !== "ADMIN") redirect("/dashboard")

        
        const profile = await Profile.findOne({_id : id})
        profile.published = true
        profile.save()

        return NextResponse.json({message: "کاربر ایجاد شد"} , {status: 200})
    } catch (error) {
        return NextResponse.json({error: "مشکلی در اتصال به سرور رخ داده است"})
    }
}