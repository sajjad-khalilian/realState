import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB()


        const {email , password} = await req.json()
        if(!email || !password){
            return NextResponse.json({error: "اطلاعات معتبر وارد کنید"} , {status: 422})
        }


        const existinguser = await User.findOne({email})
        if(existinguser) {
            return NextResponse.json({error: "این حساب کاربری وجود دارد"} , {status: 422})
        }



        const hashedPassword = await hashPassword(password)
        console.log(hashedPassword)


        const user = await User.create({email : email , password: hashedPassword})
        console.log(user)
        return NextResponse.json({message: "کاربر ایجاد شد"} , {status: 201})
    } catch (error) {
        return NextResponse.json({error: "مشکلی در اتصال به سرور رخ داده است"} , {status: 500})
    }
}