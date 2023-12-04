import AddProfilePage from "@/components/template/AddProfilePage"
import Profile from "@/models/Profile"
import connectDB from "@/utils/connectDB"
import { NextResponse } from "next/server"

async function Edit({params: {profileId}}) {
    await connectDB()
    const profile = await Profile.findOne({_id: profileId})
    if(!profile){
        return NextResponse.json({error: "کاربر یافت نشد"} , {status: 404})
    }
    return <AddProfilePage data={JSON.parse(JSON.stringify(profile))}/>
}

export default Edit
