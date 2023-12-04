import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";




export async function POST(req){
    try {
        await connectDB()

        const {title , description , price , address , realState,
                 rules , amenities, category , phoneNumber
            } = await req.json();


            const session = await getServerSession(req)
            if(!session){
                return NextResponse.json({error: "لطفا ابتدا وارد حساب کاربری خود شوید"})
            }

            const user = await User.findOne({email : session.user.email})
            if(!user){
                return NextResponse.json({error: "حساب کاربری یافت نشد"})
            }


            if(!title || 
                !description || 
                !price || 
                !address || 
                !rules || 
                !amenities || 
                !realState || 
                !category || 
                !phoneNumber){
                    return NextResponse.json({error: "لطفا اطلاعات معتبر وارد کنید"} , {status: 400})
                }

                const newProfile = await Profile.create({
                    title , description , price: +price , address , realState,
                     rules , amenities, category , phoneNumber , userId: new Types.ObjectId(user._id)})
                    console.log(newProfile)
                    return NextResponse.json({message: "کاربر ایجاد شد"} , {status: 201})
    } catch (err) {
        console.log(err)
        return NextResponse.json({error: "خطا در اتصال به سرور"} , {status: 500})
    }
}
export async function PATCH(req) {
    try {
        await connectDB()


        const { _id , title , description , price , address , realState,
            rules , amenities, category , phoneNumber
       } = await req.json()
       
       const session = await getServerSession(req)
       if(!session){
           return NextResponse.json({error: "لطفا ابتدا وارد حساب کاربری خود شوید"})
       }

       const user = await User.findOne({email : session.user.email})
            if(!user){
                return NextResponse.json({error: "حساب کاربری یافت نشد"})
            }


            if(!_id ||
                !title || 
                !description || 
                !price || 
                !address || 
                !rules || 
                !amenities || 
                !realState || 
                !category || 
                !phoneNumber){
                    return NextResponse.json({error: "لطفا اطلاعات معتبر وارد کنید"} , {status: 400})
                }

                const profile = await Profile.findOne({_id})
                console.log(user._id)
                console.log(profile.userId)
                if(!user._id.equals(profile.userId)){
                    return NextResponse.json({error: "دسترسی شما به این آگهی محدود است"} , {status: 403})
                }

                profile.title = title
                profile.description = description
                profile.price = price
                profile.address = address
                profile.realState = realState
                profile.rules = rules
                profile.amenities = amenities
                profile.phoneNumber = phoneNumber
                profile.category = category
                profile.save()

                return NextResponse.json({message: "اطلاعات آپدیت شد"} , {status: 200})
    } catch (error) {
        return NextResponse.json({error: "خطا در اتصال به سرور"})
    }
}
export async function GET(){
    try {
        await connectDB()


        const profiles = await Profile.find().select("-userId")

        return NextResponse.json({data: profiles} , {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "خطا در اتصال به سرور"} , {status: 500})
    }
}