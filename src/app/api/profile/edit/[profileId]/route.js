import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req , context){
    try {
        await connectDB()

        const id = context.params.profileId


        const session = await getServerSession(req)
        if(!session){
            return NextResponse.json({error: "لطفا وارد حساب کاربری خود شوید"} , {status: 401})
        }


        const user = await User.findOne({email: session.user.email})
        if(!user){
            return NextResponse.json({error: "حساب کاربری یافت نشد"} , {status: 403})
        }

        const profile = await Profile.findOne({_id : id})
        profile.title = title
        profile.description = description
        profile.phoneNumber = phoneNumber
        profile.address = address
        profile.realState = realState
        profile.category = category
        profile.amenities = amenities
        profile.rules = rules
        profile.save()

        
        return NextResponse.json({message: "اطلاعات آپدیت شد"} , {status: 200})
    } catch (error) {
        return NextResponse.json({error: "مشکلی در برقراری با سرور پیش آمده است"} , {status: 500})
    }
}