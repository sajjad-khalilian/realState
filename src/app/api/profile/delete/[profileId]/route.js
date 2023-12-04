import Profile from "@/models/Profile"
import User from "@/models/User"
import connectDB from "@/utils/connectDB"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function DELETE(req , context){
    try {
        await connectDB()

        const id = context.params.profileId

       const session = await getServerSession(req)
       if(!session){
           return NextResponse.json({error: "لطفا ابتدا وارد حساب کاربری خود شوید"})
       }

       const user = await User.findOne({email : session.user.email})
            if(!user){
                return NextResponse.json({error: "حساب کاربری یافت نشد"})
            }
 
            const profile = await Profile.findOne({_id: id})
            if(!user._id.equals(profile.userId)){
                return NextResponse.json({error: "دسترسی شما به این آگهی محدود است"} , {status: 403})
            }

            await Profile.deleteOne({_id : id})
            return NextResponse.json({message: "کاربر حذف شد"} , {status: 200})
                
    } catch (error) {
        return NextResponse.json({error: "خطا در ارتباط با سرور"})
    }
}